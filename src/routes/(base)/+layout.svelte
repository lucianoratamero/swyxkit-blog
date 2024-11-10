<script lang="ts">
	import BaseLayout from '$lib/BaseLayout.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<BaseLayout>
	{@render children?.()}
</BaseLayout>
