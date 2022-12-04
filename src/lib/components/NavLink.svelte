<script>
	import { page } from '$app/stores';

	$: active_classes = $page.url.pathname === $$props.href ? 'active bg-cyan-200 dark:bg-cyan-800' : '';
	export let href;
</script>

<a
	class='{active_classes} transition-all mr-1 hover:no-underline hidden rounded-lg p-1 text-zinc-800 transition-all hover:bg-cyan-200 dark:text-zinc-200 dark:hover:bg-cyan-800 sm:px-3 sm:py-2 md:inline-block'
	{href}
><span class='capsize'><slot /> </span>
</a>

<style>
</style>
