<script context="module">
  export const prerender = true; // you can uncomment to prerender as an optimization
  export const hydrate = true;

  export async function load({ params, fetch }) {
    let slug = params.slug;

    if (slug.endsWith(".md")) {
      slug = slug.replace(".md", "");
    }
    const { metadata, content } = await fetch(`/blog/notes/${slug}.json`).then(r => r.json());
    return {
      props: { metadata, content, slug }
    };
  }
</script>

<script>
  import "prism-themes/themes/prism-shades-of-purple.min.css";
  import { MY_TWITTER_HANDLE, SITE_URL, DEFAULT_OG_IMAGE } from "$lib/siteConfig";
  import dayjs from "dayjs";

  /** @type {import("$lib/types.js").ContentItem} */
  export let metadata, content; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates
</script>

<svelte:head>
  <title>{metadata.title} - luciano@ratamero.com</title>

  <link rel="canonical" href={SITE_URL} />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={metadata.title} />
  <meta name="Description" content={metadata.description} />
  <meta property="og:description" content={metadata.description} />
  <meta name="twitter:card" content={metadata.image ? 'summary_large_image' : 'summary'} />
  <meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
  <meta name="twitter:title" content={metadata.title} />
  <meta name="twitter:description" content={metadata.description} />
  {#if metadata.image}
    <meta property="og:image" content={metadata.image} />
    <meta name="twitter:image" content={metadata.image} />
  {:else}
    <meta property="og:image" content={DEFAULT_OG_IMAGE} />
    <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
  {/if}
</svelte:head>

<article
  id="skip"
  class="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-center sm:px-8"
>
  <h1 class="mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl ">
    {metadata.title}
  </h1>
  <div
    class="bg mt-2 flex w-full justify-between sm:flex-col sm:items-start md:flex-row md:items-center"
  >
    <p class="flex items-center text-sm text-gray-700 dark:text-gray-300">Luciano Ratamero</p>
    <p class="min-w-32 flex items-center text-sm text-gray-600 dark:text-gray-400 md:mt-0">
      {dayjs(metadata.date).toISOString().slice(0, 10)}
    </p>
  </div>
  <div
    class="my-2 flex h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-pink-500 sm:mx-0 w-full"></div>

  <div class="prose mt-12 w-full max-w-none dark:prose-invert">
    {@html content}
  </div>
</article>
