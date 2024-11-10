<script module>
	import { MY_TWITTER_HANDLE, MY_YOUTUBE, REPO_URL, SITE_TITLE } from '$lib/siteConfig.js';
</script>

<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { navigationIsDelayed } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import { Circle3 } from 'svelte-loading-spinners';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const children_render = $derived(children);
</script>

<svelte:head>
	<link
		rel='alternate'
		type='application/rss+xml'
		title={'RSS Feed for ' + SITE_TITLE}
		href='/feed.xml'
	/>
</svelte:head>

{#if $navigationIsDelayed}
	<div class='fixed w-full h-full z-10' in:fade={{ duration: 150 }}>
		<div class='absolute w-full h-full bg-white dark:bg-cyan-900 opacity-50 z-10'></div>
		<div class='absolute w-full h-full flex justify-center items-center z-20'>
			<Circle3 />
		</div>
	</div>
{/if}

<div class='flex flex-col justify-center px-4 sm:px-8'>
	<Nav />
</div>
<main class='flex flex-col justify-center px-4 sm:px-8'>
	{@render children_render?.()}
</main>

<footer class='mx-auto mb-8 flex w-full max-w-3xl flex-col items-start justify-center'>
	<hr class='border-1 mb-8 w-full border-zinc-200 dark:border-zinc-800' />
	<div class='grid w-full max-w-3xl grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-8'>
		<div class='flex flex-col space-y-4'>
			<a class='text-zinc-500 transition hover:text-zinc-300' href='/'>Home</a>
			<a class='text-zinc-500 transition hover:text-zinc-300' href='/about'>About me</a>
			<a class='text-zinc-500 transition hover:text-zinc-300' href='/feed.xml' rel='external'>
				RSS
			</a>
		</div>
		<div class='flex flex-col space-y-4'>
			<a
				class='text-zinc-500 transition hover:text-zinc-300'
				target='_blank'
				rel='noopener noreferrer'
				href={'https://twitter.com/intent/follow?screen_name=' + MY_TWITTER_HANDLE}
			>
				Twitter
			</a>
			<a
				class='text-zinc-500 transition hover:text-zinc-300'
				target='_blank'
				rel='noopener noreferrer'
				href={REPO_URL}
			>
				GitHub
			</a>
			<a
				class='text-zinc-500 transition hover:text-zinc-300'
				target='_blank'
				rel='noopener noreferrer'
				href={MY_YOUTUBE}
			>
				YouTube
			</a>
		</div>
	</div>
	<p class='prose px-4 dark:prose-invert sm:px-8'>
		This blog is based on the
		<a href='https://swyxkit.netlify.app/'>swyxkit</a>
		template, with heavy modifications.
	</p>
</footer>
