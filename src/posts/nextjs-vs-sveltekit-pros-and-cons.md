---
date: 2022-09-11
description: SvelteKit has released their first release candidate for the 1.0 version
  last week, and this was the last push I needed to start playing with it again -
  but lately, for work, I've been really impressed with Next.js. here are my thoughts
  about them.
slug: nextjs-vs-sveltekit-pros-and-cons
title: 'Next.js vs SvelteKit: pros and cons'
updated_at: 2022-09-11
---

[SvelteKit](/blog/notes/SvelteKit) has released their first release candidate for the 1.0 version last week, and this was the last push I needed to start playing with it again - but lately, for work, I've been really impressed with [Next.js](https://nextjs.org/). something in my svelty brain told me that I would like [SvelteKit](/blog/notes/SvelteKit) better, but whenever this kind of thought goes through my head, I try to force myself to evaluate the gut feeling properly, so I just recreated the same app on both frameworks. here are my thoughts on my experiences with them.

---

## tl;dr

if you want a simple answer, I don't really have one. both of them are better for specific cases, and both are "good enough" for 99% of the scenarios.

that being said, my gut feeling was right, and I ended up liking the developer experience of [SvelteKit](/blog/notes/SvelteKit) better. it comes around to the features that I care about most, like simplicity, amount of code, and, well, using Svelte instead of React.

if you want to just look at the code, here are the repos. just be mindful that they are proof of concepts, so I bypassed most of the things I would do properly on a real app, like better error handling and a more intuitive UI.

- [https://github.com/lucianoratamero/sveltekit-todo](https://github.com/lucianoratamero/sveltekit-todo)
- [https://github.com/lucianoratamero/nextjs-todo](https://github.com/lucianoratamero/nextjs-todo)  


there's a bit more nuance to it, so if you're interested on the details, here they come.

## the project

whenever I try to test a full-stack framework (which is the case for both of them), a CRUD scenario with small bits of interactivity is always a good proof of concept. to do that, I opted to use [Prisma](https://www.prisma.io) to interact with a Postgres database (provided by [Supabase](https://supabase.com/), which was a great combo), and to make a simple 'todo' app, with editable and autosaving todos.

that meant that the user would have to be able to not only create the todos, but update them inline, and having them autosave whenever the user changes the todo in any way. this way, I could test the front-end features (sending data automatically to the backend, adding loading overlays, etc.), while experimenting with ways to interact with the data on the back-end.

I also used TypeScript for the [Next.js](https://nextjs.org/) app, and TypeScript in comments (JSDoc) for the [SvelteKit](/blog/notes/SvelteKit) app, which are both recommended by their own stacks. both of them were deployed to Vercel.

## lessons learned from Next.js

as I expected, developing with Next.js was really straightforward. whenever you create an app, it comes with plenty of examples, so you don't really need to go to the docs as much; and when you do, the docs are great.

the way we deal with creating and updating data in a Next app is really close to what people are used to with React: get data from the form, send a fetch request to an API endpoint, update the UI with the new data, done.

creating the API endpoints was pretty easy, so I have absolutely nothing to complain about this topic. great job by the Next team.

there were a couple of problems that I needed to go through, though. for example, using TypeScript with React requires a bit of a learning curve, and the temptation to not type anything is pretty big. I already had a little of experience with it, so it wasn't that time consuming, but it's always, **always** frustrating to not get something done because of mismatching types that you know are compatible. Prisma helped me a lot on this front, since it autogenerates types for the database models.

another issue was, well, working with React again. I know, React pays my bills, but [there's not that much argument to keep using it](https://joshcollinsworth.com/blog/self-fulfilling-prophecy-of-react), since most frameworks, including Svelte, are way ahead of it in many aspects. I always feel that React requires more of my brain to work with, and that the cognitive load is always a bit bigger than it should.

I also couldn't make the forms work without javascript - at least not in an easy way. I'll talk more about it on the [SvelteKit](/blog/notes/SvelteKit) section.

some other small things that bugged me were not having Prettier installed by default, not having the possibility of having a test structure set up from the start, and having to force a page reload to update the content of the page in a little bit of a hacky way. nothing major, though.

but [SvelteKit](/blog/notes/SvelteKit)... _oh, man_, I **loved** working with [SvelteKit](/blog/notes/SvelteKit).

## lessons learned from SvelteKit

first of all, most of the good things from Next were found in SvelteKit as well, like file-based routing and architecture in general. but I think it's safe to say most of the good parts were even better here.

for example, when creating a [SvelteKit](/blog/notes/SvelteKit) app, the CLI asks me a few questions that helped me a lot from the get-go. not having to set up Prettier and Playwright helps **a lot** when you're starting a project.

![](assets/sveltekit-create-app-cli.png)

I also felt like I was just writing HTML with sprinkled bits of JS instead of JS everywhere, and that's an easy win provided by Svelte, the whole "use the platform" thing. I wrote the forms like real forms, I dealt with native Request and Response objects instead of something custom, and that even helped me learn a bit on how HTML forms work.

another thing that caught my eye was that it was really easy to make the forms work without JS, since [SvelteKit](/blog/notes/SvelteKit) comes with the [`use:enhance`](https://kit.svelte.dev/docs/form-actions#progressive-enhancement-use-enhance) action. just by adding `use:enhance` to the form tag (and, in my case, adding a callback to turn the loading overlay on and off), [SvelteKit](/blog/notes/SvelteKit) is able to provide an app-like experience to a normal HTML form, not needing a full page reload.

there's also the [form actions](https://kit.svelte.dev/docs/form-actions) feature, that allowed me to not need to write API endpoints, giving me a simpler way to deal with forms. in summary, the whole CRUD experience was simpler and required less code. it did take me a one-time while to learn how to make them, though, since they're specific to SvelteKit.

there were other small improvements as well, like autogenerated types for server to client page data, faster build times (like 3x faster), smaller bundles (70k vs 280kb), and slightly lower layout shifts.

it wasn't all good, though. Intellij users, like myself, have to deal with a worse developer experience when writing typed code, because JetBrains hasn't made much effort to make the Svelte plugin as good as the one for VS Code (so I just used VS Code instead). also, [SvelteKit](/blog/notes/SvelteKit) is clearly the less stable and debuggable of them both, since Next is a way more mature and battle-tested platform. it's also missing some of the key features from Next, like [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration), making [SvelteKit](/blog/notes/SvelteKit) not proper for all types of apps.

## conclusion

as I always say, when making the decision to use one vs the other, everything depends on everything. they are clearly better for different use cases. but if you asked me which one I liked more, I can't stress **how much** I enjoyed developing this app with [SvelteKit](/blog/notes/SvelteKit). it took me a little bit to understand some of the naming conventions and the design decisions, but when I did, everything just clicked - and it didn't take more than a few hours to understand the differences.

I also really, **really** enjoyed using Prisma as a database ORM with Supabase. the experience was so good that now I'm seriously considering leaving Django behind and just using SvelteKit + Prisma for full stack apps. I can make another blog post about it, if people want me to.

I'll leave you with my pros and cons for each framework, and if you have anything to ask or add, be free to use the comments :]

## pros and cons

### Next.JS

#### pros

- really easy to get started
- familiar to those that are used to the React way
- great docs  


#### cons

- react's DX is seriously lacking in comparison with svelte
- typescript on react is a bit hard to understand sometimes. prisma helped a lot with their autogenerated types for models
- didn't come with prettier installed out of the box (personal preference)
- still needs js to create/update data (or, in other words, it's not easy to do so)
- bigger bundles and slower build times  


### SvelteKit

#### pros

- the cli to create the project is great
- closer to "the platform" - I ended up learning a lot about how forms work
- form actions take a bit of time to properly understand, but when you do, they're awesome
- progressively enhanced forms means my forms will still work if js fails or is blocked
- svelte improvements: less code, less cognitive load
- significantly faster builds and smaller bundles  


#### cons

- bad integration with my preferred IDE (intellij idea)
- missing big features such as incremental static regeneration
- a little bit harder to debug when things go wrong, mainly on the back-end
