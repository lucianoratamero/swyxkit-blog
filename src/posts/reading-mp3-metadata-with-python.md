---
date: 2022-04-18
description: Music is one of my real passions. If I'm not listening to something,
  I'm probably singing something to myself all the time. But for the longest time,
  I never had the time (or money) to have a better listening experience. Since I'm
  at home, and the pandemic is not over, I decided to understand a little bit better
  what (and how) I'm listening to music - with Python :]
slug: reading-mp3-metadata-with-python
title: Reading MP3 metadata with Python
updated_at: 2022-04-18
---

Music is one of my real passions. If I'm not listening to something, I'm probably singing something to myself all the time. But for the longest time, I never had the time (or money) to have a better listening experience. Since I'm at home, and the pandemic is not over, I decided to understand a little bit better what (and how) I'm listening to music - with Python :]

## Quick summary on how I listen to music

So, as millenials do, I have grown listening to cassette tapes, CDs, and eventually MP3s. I remember being 15, using a huge ass pair of headphones (real cheap ones too) with my 128MB MP3 player - and it was **awesome**.

With time, I grew my MP3 collection, both through good channels (like bandcamp for example), and less... legal channels (like Napster, Kazaa, and Souseek, whic I still use now and then). I can't say my library is big, but it's around 4200 musics in size.

The problem is that a good chunk of it is garbage; not in quality of the music itself, but in the quality of the _file compression_. And now that I have the money to get some better headphones, some of my music library is just **too dank**.

As with anything, Python can help me.

## Enter `mutagen`

[`mutagen`](https://mutagen.readthedocs.io/en/latest/) is a Python library that helps us to find metadata for our audio files. After discovering it, discovering which MP3 files were too compressed was pretty straightforward.

First, I installed it locally (in my case, it was already installed somehow. I probably fiddled around with it in a distant past):

```sh
pip3 install --user mutagen
```

Then, I wrote a quick _and really dirty_ Python script to tell me which of my MP3 had a bitrate lower than 256kbps. The higher the bitrate, the less it's compressed:

```python
import os
import mutagen


def list_dank_mp3s(folder):
    matches = []
    for root, dirnames, filenames in os.walk(folder):
        for filename in filenames:
            if filename.endswith(".mp3"):
                # I didn't take the time to understand
                # why it was formatting things wrong
                # so I just hammered the names
                matches.append(os.path.join(root, filename)[:-1] + "3\n")

    bad_mp3s = []
    for item in matches:
        # here, we get the bitrateof the MP3 file
        # there are a LOT of other metadata there,
        # if you want to use it
        bitrate = mutagen.File(item.strip()).info.bitrate
        # if the bitrate doesn't end with 000, it means it's most likely variable
        # if it is, we leave it be. if not, we check if it's below 256kbps
        if str(bitrate).endswith("000") and bitrate / 1000 < 256:
            bad_mp3s.append(os.path.join(os.path.dirname(os.path.abspath(__file__)), item))
    return bad_mp3s
```

This function gives me a list, that has the paths of the MP3s that I may want to buy or redownload in a better bitrate. I then write the list to a file, and _voilà_, all my bad sounding MP3s are listed.

---

Do you have any other uses for this kind of library? Do you have any tips on good headphones? Send me a comment down here so we can keep the discussion going! Thanks for your attention, and see you next time :]
