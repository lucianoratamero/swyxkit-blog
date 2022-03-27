<script>
	export let href = '#';

	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a
	sveltekit:prefetch
	class="w-full text-gray-900 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-100 hover:no-underline"
	{href}
	><div class="mt-4 mb-12 w-full">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="mb-2 w-full flex-auto text-lg font-medium md:text-xl">
				{title}
			</h4>
			<div class="inline-flex flex-1 items-center">
				<p class="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">{stringData}</p>
			</div>
		</div>
		<p class="text-gray-600 dark:text-gray-400">
			<slot />
		</p>
	</div></a
>
