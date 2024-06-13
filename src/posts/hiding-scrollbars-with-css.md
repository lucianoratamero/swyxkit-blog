---
date: 2022-03-28
description: Today I learned of a really simple way to make scrollbars functional,
  but hidden :]
slug: hiding-scrollbars-with-css
title: Hiding scrollbars with CSS
updated_at: 2022-03-28
---

Today I learned of a really simple way to make scrollbars functional, but hidden :]

It's really simple, you just need to add a couple of rules into your CSS and you'll be good to go:

```css
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Chrome, Safari and old Opera */
.hide-scrollbar::-webkit-scrollbar { display: none; }
```

This is really useful for when you have an off-canvas panel (or anything absolute/fixed positioned), and you want it to scroll by itself if it has too much content.

> Reference: [https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp](https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp)
