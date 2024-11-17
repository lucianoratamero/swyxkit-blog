<script lang="ts">
	import IndexCard from '$lib/components/IndexCard.svelte';
	import dayjs from 'dayjs';

	let { data } = $props();
	let { items } = data;

	let inputEl: HTMLInputElement = $state();

	function focusSearch(e) {
		if (e.key === '/' && inputEl) inputEl.select();
	}

	let isTruncated = $state(items.length > 20);
	let search: string = $state();
	let list = $derived(
		items
			.filter((item) => {
				if (search) {
					return (
						item.title.toLowerCase().includes(search.toLowerCase()) ||
						item.description.toLowerCase().includes(search.toLowerCase())
					);
				}
				return true;
			})
			.slice(0, isTruncated ? 2 : items.length)
	);
</script>

<svelte:head>
	<title>Notes - luciano@ratamero.com</title>
	<meta
		name="description"
		content="This is the place leave totally unrelated notes. They're mostly used on the blog posts, but may be linked from somewhere else."
	/>
</svelte:head>

<svelte:window onkeyup={focusSearch} />

<article class="mx-auto mb-16 flex max-w-3xl flex-col items-start justify-center px-4 sm:px-8">
	<h1 class="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
		Notes
	</h1>
	<p class="my-8 text-zinc-600 dark:text-zinc-400">
		This is the place leave totally unrelated notes. They're mostly used on the blog posts, but may
		be linked from somewhere else. In total, I've written {items.length} notes here. Use the search below
		to filter by title and description.
	</p>
	<div class="relative mb-4 w-full">
		<input
			aria-label="Search articles by title and description"
			type="text"
			bind:value={search}
			bind:this={inputEl}
			placeholder="Hit / to search by title and description"
			class="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-zinc-900 focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
		/>
		<svg
			class="absolute right-3 top-3 h-5 w-5 text-zinc-400 dark:text-zinc-300"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</div>
	{#if !search}
		<h2 class="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			All Notes
		</h2>
	{:else}
		<h2 class="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Searching by {search}
		</h2>
	{/if}
	{#if list.length}
		<ul id="skip" class="w-full">
			{#each list as item}
				<li class="mb-8 text-lg">
					<IndexCard
						href={`/blog/notes/${item.slug}`}
						title={item.title}
						stringData={dayjs(item.date).toISOString().slice(0, 10)}
					>
						{item.description}
					</IndexCard>
				</li>
			{/each}
		</ul>
		{#if isTruncated}
			<div class="flex justify-center">
				<button
					onclick={() => (isTruncated = false)}
					class="inline-block rounded bg-blue-100 p-4 text-lg font-bold tracking-tight text-black hover:text-cyan-900 dark:bg-blue-900 dark:text-white hover:dark:text-cyan-200 md:text-2xl"
				>
					Load More Posts...
				</button>
			</div>
		{/if}
	{:else if search}
		<div class="prose dark:prose-invert">
			No posts found for
			<code>{search}</code>.
		</div>
		<button class="p-2 bg-slate-500" onclick={() => (search = '')}>Clear your search</button>
	{:else}
		<div class="prose dark:prose-invert">No blogposts found!</div>
	{/if}
</article>
