<script lang="ts">
	import { page } from '$app/stores';
	type Props = {
		href: string;
		children: () => any;
	}

	let { ...props }: Props = $props();
	let active_classes = $derived($page.url.pathname === props.href ? 'active bg-cyan-200 dark:bg-cyan-800' : '');

	const children_render = $derived(props.children);
</script>

<a
	class={`${active_classes} transition-all mr-1 hover:no-underline hidden rounded-lg p-1 text-zinc-800 hover:bg-cyan-200 dark:text-zinc-200 dark:hover:bg-cyan-800 sm:px-3 sm:py-2 md:inline-block`}
	href={props.href}
>
<span class='capsize'>{@render children_render()} </span>
</a>

<style>
</style>
