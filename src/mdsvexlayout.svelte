<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const children_render = $derived(children);

</script>

<!-- https://tailwindcss.com/docs/typography-plugin#element-modifiers -->
<article
	class='container prose mx-auto mb-12 hover:prose-a:text-sky-700
prose-ul:list-disc
dark:prose-invert
'
>
	{@render children_render?.()}
</article>
