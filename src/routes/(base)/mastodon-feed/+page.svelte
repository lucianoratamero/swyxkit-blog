<svelte:head>
	<title>@mastodon - luciano@ratamero.com</title>
	<meta name='description' content='My mastodon feed' />
</svelte:head>

<section
	class='relative mx-auto flex w-full max-w-3xl flex-col border-gray-200
	bg-gray-50 bg-opacity-60 py-8 text-gray-900 dark:border-gray-700 dark:bg-gray-900
	dark:text-gray-100 sm:pb-16 sm:px-7'
>
	<h1 class='mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl'>@mastodon - @lucianoratamero@bolha.us</h1>
	<iframe title='mastodon-feed' class='mastodon-timeline-embed' frameborder='0'
					src='https://embed.labnotes.org/embed/lucianoratamero@bolha.us?profile=hide&reblogs=show&pinned=hide'
					style='width:100%'></iframe>
	<script src='https://embed.labnotes.org/embed.js' async></script>
</section>
