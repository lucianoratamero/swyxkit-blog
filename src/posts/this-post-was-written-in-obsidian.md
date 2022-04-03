---
date: 2022-04-03
description: 'For the last three years, I was not satisfied with my process of writing
  blog posts. It was too artisanal, so I always found something less boring to do.
  Here''s how it all changed with my two new favorite tools: SvelteKit and Obsidian.'
slug: this-post-was-written-in-obsidian
title: This post was written in Obsidian
updated_at: 2022-04-03
---
   
For the last three years, I was not satisfied with my process of writing blog posts. It was too artisanal, so I always found something less boring to do. Here's how it all changed with my two new favorite tools: [SvelteKit](/blog/notes/SvelteKit) and [Obsidian](/blog/notes/Obsidian).   
   
> Every time you see a link, I encourage you to take a look. Most of them are not direct external links, but notes I've made about that topic. Some of the information there can complement what you're reading right now :]   
   
## How it was    
My previous site, while entirely made by me and very customized, was not 100% easy to maintain. It already used [SvelteKit](/blog/notes/SvelteKit), but in a very, *very* dumb way. The thing is: I wanted to keep old posts alive, and they were converted to plain HTML, which was served by [SvelteKit](/blog/notes/SvelteKit), and that was that.   
   
That meant that every time I wanted to write something new, I needed to write it in HTML. It's not entirely bad, and allowed me to do some fancy stuff, but it was **impractical**, to say the least. Because of that, I never posted anything anymore, and didn't want to migrate to something else, since that meant migrating lots of posts from HTML to something like [Markdown](/blog/notes/Markdown).   
   
## How it changed    
It all changed when I discovered [Obsidian](/blog/notes/Obsidian). If you want to know more about my feelings about it, take a look at the [A week with Obsidian](/blog/a-week-with-obsidian) post. But what really enticed me to make a blog based on it were two details: it's really easy to write notes on it (like most [Markdown](/blog/notes/Markdown)-based editors), and that the notes link to each other easily. That blew my mind a little bit, since it meant I could write things fast and give more context through links.   
   
## How it is    
Now, while I still use [SvelteKit](/blog/notes/SvelteKit) for the ease of use and the performance, I decided to go with a mix between two SvelteKit templates: [SwyxKit](https://github.com/sw-yx/swyxkit) and [Svelteland's Markdown Blog Demo](https://github.com/svelteland/svelte-kit-blog-demo). SwyxKit gave me the basic infrastructure and sane visual defaults, while the Markdown Blog Demo gave me the piping necessary to write in Markdown and output HTML.   
   
So I write everything in [Obsidian](/blog/notes/Obsidian), which makes notes in Markdown, and my *SwyxKit Markdown Frankenstein's monster* publishes it as HTML. The problem then was moving what was inside of the Obsidian vault to the folder my site expected the posts to be.   
   
To solve that, I used this byotiful python library called [obsidianhtml](https://obsidian-html.github.io/). It's mostly used to generate static sites from an Obsidian vault, but it's flexible enough to do strictly what I want it to: to capture internal links between the notes and substitute them with real links, and output the Markdown files to the blog posts folder of my site. [I've made a custom shellscript function to do that for me](/blog/notes/obsidianhtml-configs-and-script).   
   
## The end result   
Now, I can simply open Obsidian, write what I want to write (links, images and all), run a command to export the [Markdown](/blog/notes/Markdown) files to the site's source code, check that it's working on the site locally, and push the code. Oh, and I've been using [Vercel](vercel.com) as the hosting/publishing solution (and it's been awesome so far), since it takes care of building the app and publishing the new version.   
   
Be free to take a look at [the site's source code](https://github.com/lucianoratamero/swyxkit-blog/) and give me feedbacks and suggestions on [Twitter](https://twitter.com/lucianoratamero)! Thanks for your attention, and see you next time :]