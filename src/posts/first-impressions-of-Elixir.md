---
date: 2022-08-21
description: this last week, I came back to Elixir, and I'm loving every second with
  it. here are my first impressions.
slug: first-impressions-of-Elixir
title: First impressions of Elixir
updated_at: 2022-08-21
---

I remember being in a [Python Brasil](/blog/notes/Python-Brasil) (I think it was in Belo Horizonte), on a bar after the talks of the day were done, talking with some friends, when one of the people around said wonders about Erlang and [Elixir](/blog/notes/Elixir). I also remember trying it later that year, and getting completely confused about a lot of topics. thinking about back then, I think I wasn't ready as a programmer to learn it in a meaningful way. this last week, I came back to Elixir, and I'm loving every second with it. here are my first impressions.

---

## getting started

when I'm trying out a new language, there are a few pain points that make me lose my interest fast. they are mostly:

- difficulty on starting a project: I'm way too spoiled with [Python](/blog/notes/Python) and [JavaScript](/blog/notes/JavaScript), so if installing the language tools, configuring the IDE, and writing and executing code demands a manual, I won't do it;
- weird syntax: to me, programming should be democratic, should be readable. of course, every language will introduce new things, and, for that, new syntax needs to be introduced - but if your programming language is not easy to intuitively understand, or the balance between readability and features is too big, that turns me off. currently, my limit would be something like Rust, which is hard to understand, but extremely powerful;
- weak standard library and bad dependency/module management: in my opinion, if the language has a bad or problematic standard library (hello JS!), or if the tools for dependency/module management are complicated (hello Go!), I'll struggle **a lot**;
- bad documentation: well, I don't think I need to explain this one;
- too many hoops needed for me to test my code: when I play with a language, I **need** to get confident with it, and one of the ways to be confident is to have a simple way to create and run tests. I don't really mind having to install separate tools to test my code, but it has to be simple.  


I'll go topic by topic in the next sections.

## starting an Elixir project

to start a project, you need to install Elixir (it was one command), then run `mix new`. that's it. configuring the IDE was as straightforward as with other languages: install the plugin, set up which version I was using, and that was it as well, it all worked on the first try.

writing new code was easy (I'll talk about the syntax next) and running it was a breeze. even the interactive shell (`iex`) was easy to use, and together with `mix` (which comes with the language), I was recompiling and executing code in minutes.

## Elixir's syntax

the first thing to note here is the elephant in the room: Elixir is a language based on functional programming. somehow, inside my head, functional programming made a lot of sense, but came with a huge syntax cost. I had played with Elm and even a bit of Haskell before (not that I remember anything about them), and both of them left me a bad impression. for the old me, the syntax you needed to learn was far too abstracted from what the code was doing, while being far too powerful to ignore.

so when I started playing with Elixir last week, I came prepared, clad in armor, ready to dig in and get my hands dirty.

but the confusion and the weird syntax never came. in fact, **I didn't remember how close to Ruby the language feels**; at least at first. I felt like I was just playing around with functions, and that was **exactly** what I was doing - without fear, without any of the hardships I was expecting.

that left me open to appreciate some of the amazing features Elixir has - and I don't use the word amazing lightly.

here's a sample of Elixir's syntax. tell me if it's hard to understand:

```elixir
defmodule Cards do
  def create_deck do
    values = ["Ace", "Two", "Three", "Four", "Five"]
    suits = ["Clubs", "Spades", "Hearts", "Diamonds"]

    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end
```

## standard library and dependency management

Elixir's standard library, at least as far as I've gone, is no more than expected for a functional language. the `Enum` module has everything you need to deal with lists, and if you know the basic types and knows how to deal with lists, you're mostly set.

installing new dependencies with `hex` was pretty easy too. not as easy as on JS (`npm install packagename`) or with Python + Poetry (`poetry add packagename`), but still easy enough. you just need to run `mix hex.info packagename`, copy the package info into your `mix.exs` file and install it with `mix deps.get`. pretty straightforward, so no complaints here.

## documentation, oh, beautiful documentation

not only Elixir's documentation is plentiful, but it's also easily searchable and literally built into the language. it was really easy to find what I needed with a couple of web searches, and, together with the IDE's autocomplete, it was a bit rare to really **need** to search for it.

if, for example, you want to understand how the `Enum` module works, you just need to go into the interactive shell by running `iex`, then type `h Enum`. that gives you all you need to know about the module right from the command line. the same goes for module functions. for example, `h Enum.split` returns you this:

![Elixir's Enum documentation](/blog/assets/elixir-help-enum.png)

## testing Elixir code

whenever you start a new project or module, it automatically creates a test file for it. not only that, but it also has all the basic tools to test your code built-in. I just needed to run `mix test` and the test was running.

that would be enough for me to give it more than a passing grade, but there was one more thing that caught my eye, and that's insanely useful: Doctests.

when you're writing your Elixir code, as with any other language, it's encouraged to write documentation for your functions. here's what it looks like:

```elixir
defmodule Cards do
  def create_deck do
    values = ["Ace", "Two", "Three", "Four", "Five"]
    suits = ["Clubs", "Spades", "Hearts", "Diamonds"]

    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end

  @doc """
    Deals cards to a hand, returning the hand and the deck's remaining cards.
    The `number_of_cards` argument relates to the size of the hand dealt.

  ## Examples
      iex> {hand, _deck} = Cards.create_deck |> Cards.deal(1)
      iex> hand
      ["Ace of Clubs"]
  """
  def deal(deck, number_of_cards) do
    Enum.split(deck, number_of_cards)
  end
end

```

do you see the `Examples` section above the `deal` function? cool, right? it's always nice to add examples on how the code works, right? what if I told you that _the example you see there is already a test_? because it is. if you open the test file, you'll see this:

```elixir
defmodule CardsTest do
  use ExUnit.Case
  doctest Cards
end
```

the `doctest` line signals to the testing framework that you want to use the examples inside of the documentation as tests, and it's generated by default. so if I run `mix test`, I'll see this:

![Image of a terminal showing the tests were successful](/blog/assets/elixir-doctest-result.png)

that not only gives you a free test for your code, but it also encourages you to write the docs and to keep them updated. this is the first time I've seen such a feature on any stack, and for that to be built into the language is awesome!

btw, you can also generate a full fledged static site from your code documentation too with [ex_doc](https://github.com/elixir-lang/ex_doc). just install it and run `mix docs` and it's done.

## so yeah, I really like it

I'll keep on learning and trying to document some of the cool and bad things here on the blog. I've not been this interested in learning a new programming language in ages, so I'll be completely honest with my findings. my goal is to properly understand what I'm doing when I get to a [Phoenix](/blog/notes/Phoenix) app, but that will probably take a while.

any thoughts or questions? leave a comment! and, as always, thanks for your attention :]
