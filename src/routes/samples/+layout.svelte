<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const children_render = $derived(children);

</script>

<article
	class='mx-auto p-2 flex w-full max-w-3xl flex-col items-start justify-center sm:p-4'
>
	<div class='prose mt-12 w-full max-w-none dark:prose-invert'>
		{@render children_render?.()}
	</div>
</article>
