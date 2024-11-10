<script lang="ts">
	import '../tailwind.css';
	import '$lib/hljs-github-dark.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
