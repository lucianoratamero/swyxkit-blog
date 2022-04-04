---
date: 2022-04-03
description: Sometimes, when the internet connection is not ideal, SvelteKit apps
  might look like they froze when navigating to another page. This is how I solved
  this issue.
slug: showing-a-loading-spinner-when-navigation-is-delayed-in-sveltekit
title: Showing a loading spinner when navigation is delayed in SvelteKit
updated_at: 2022-04-03
---
   
Sometimes, when the internet connection is not ideal, [SvelteKit](/blog/notes/SvelteKit) apps might look like they froze when navigating to another page. This is how I solved this issue.   
   
[SvelteKit](/blog/notes/SvelteKit) provides [a lot of useful stores](https://kit.svelte.dev/docs/modules#$app-stores) that may give you a better insight on how the app is behaving. One of them is the `navigating` store. Whenever the client-side routing is transitioning between pages, this store is updated with an object that contains the paths of where you're coming `from`, and where you're going `to`:   
   
```js
{
   from: "/"
   to: "/blog"
}
```
   
   
When it's not transitioning between pages, it just returns `null`. That allows us to add an `{#if}` block that renders a loading overlay is there's any value on the store:   
   
```svelte
<script>
  // ...
  import { fade } from "svelte/transition";
  import { Circle3 } from "svelte-loading-spinners";
  import { navigating } from "$app/stores";
</script>

<!-- ... -->

{#if Boolean($navigating)}
<div class="fixed w-full h-full z-10" in:fade={{ duration: 150 }}>
  <div class="absolute w-full h-full bg-white dark:bg-cyan-800 opacity-50 z-10"></div>
  <div class="absolute w-full h-full flex justify-center items-center z-20">
    <Circle3 />
  </div>
</div>
{/if}
```
   
   
This implementation works fine, but there's a problem: since [SvelteKit](/blog/notes/SvelteKit) is **really** fast, the user may see flashes of the loading overlay when navigating, since there's simply no time for the user to recognize that the flash *is* the loading overlay.   
   
To fix that, I created a `navigationIsDelayed` store that listens to the `navigating` store and only changes it's value to true when the navigation is hanged for more than 500ms:   
   
```js
import { derived } from "svelte/store";
import { navigating } from "$app/stores";

let timer = null;
export const navigationIsDelayed = derived(navigating, (newValue, set) => {
  if (timer) { clearTimeout(timer); }
  if (newValue) {
    timer = setTimeout(() => set(true), 500);
  }
  set(false);
});
```
   
   
Then updated my `__layout.svelte` using the new store:   
   
```svelte
<script>
  // ...
  import { fade } from "svelte/transition";
  import { Circle3 } from "svelte-loading-spinners";
  import { navigationIsDelayed } from "$lib/stores.js";
</script>

<!-- ... -->

{#if $navigationIsDelayed}
  <div class="fixed w-full h-full z-10" in:fade={{ duration: 150 }}>
    <div class="absolute w-full h-full bg-white dark:bg-cyan-800 opacity-50 z-10"></div>
    <div class="absolute w-full h-full flex justify-center items-center z-20">
      <Circle3 />
    </div>
  </div>
{/if}

```
   
   
This way, the loading overlay only appears if the user's internet is **so bad** that can't load a couple of kbs in less than 500ms.   
   
That's it for now! I hope this was useful to you, and see you next time :]