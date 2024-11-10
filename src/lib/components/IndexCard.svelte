<script>

	
	/**
	 * @typedef {Object} Props
	 * @property {string} [href]
	 * @property {string} [title]
	 * @property {string} [stringData]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		href = '#',
		title = 'Untitled post',
		stringData = 'no date',
		children
	} = $props();

	const children_render = $derived(children);
</script>

<a
	data-sveltekit-prefetch
	class="w-full transition-colors text-zinc-900 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-100 hover:no-underline"
	{href}
	><div class="mt-4 mb-12 w-full">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="mb-2 w-full flex-auto text-lg font-medium md:text-xl">
				{title}
			</h4>
			<div class="inline-flex flex-1 items-center">
				<p class="mb-4 w-32 text-left text-zinc-500 md:mb-0 md:text-right">{stringData}</p>
			</div>
		</div>
		<p class="text-zinc-600 dark:text-zinc-400">
			{@render children_render?.()}
		</p>
	</div></a
>
