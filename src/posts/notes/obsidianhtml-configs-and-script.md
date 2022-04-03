---
date: 2022-04-03
description: "Here are the configs and scripts I use to migrate notes from a part
  of my Obsidian vault to my site's source code folder. Let's just hope it's up to
  date \U0001F605"
slug: obsidianhtml-configs-and-script
title: Obsidianhtml configs and script
updated_at: 2022-04-03
---
   
Here are the configs and scripts I use to migrate notes from a part of my Obsidian vault to my site's source code folder. Let's just hope it's up to date 😅   
   
Oh, all of this assumes you have a folder structure like this on Obsidian:   
   
![A folder structure visualization with an "assets" subfolder and an "Index.md" file](../assets/obsidian-blog-folder.png)   
   
The important parts are:   
   
- the `assets`  folder, which contains all images and static files that are inside of your notes;   
- and the `Index` note, which remains empty. It's required by obsidianhtml, so we just leave it there. It will not be on the blog.   
   
With this structure set up, just take a look at the following configs, change what you need, and you'll be set!   
   
## obsidianhtml.yml   
```yml
obsidian_folder_path_str: "/home/luciano/Nextcloud/obsidian/root/blog"
obsidian_entrypoint_path_str: "/home/luciano/Nextcloud/obsidian/root/blog/Index.md"
toggles:
  process_all: True
```
   
   
This here is the configuration file for the exporter that I use, [obsidianhtml](https://obsidian-html.github.io/). What it does is to process everything that is inside this `obsidian_folder_path_str` folder, and put the output to a local `output` folder. Inside, there's the HTML and [Markdown](../notes/Markdown) versions, but we'll only use the Markdown one.   
   
## `compile-md-to-blog`   
```sh
# Obsidian to blog markdown
export BLOG_DIR=~/projects/swyxkit-blog/src/posts/
export OBSIDIANHTML_CONFIG_YML=~/Nextcloud/misc/obsidianhtml.yml

compile-md-to-blog(){
  rm -rf $BLOG_DIR
  mkdir $BLOG_DIR
  obsidianhtml -i $OBSIDIANHTML_CONFIG_YML
  rm ./output/md/index.md
  mv ./output/md/* $BLOG_DIR
  rm -rf ./output
  cd $BLOG_DIR
  find . -type f -name "*.md" -print0 | xargs -0 sed -i "s/\)/)/g"
  find . -type f -name "*.md" -print0 | xargs -0 sed -i "s/(\.\//(\/blog\//g"
  rm -rf ../../static/blog/
  mkdir ../../static/blog/
  mv assets ../../static/blog/
  cd -
}
```
   
   
And here's the crazy spaghetti code that does what I really need, which is to call obsidianhtml and do a couple of other things. I put it inside of my `.zshrc` file, and I urge you to do the same, or use it as a separate script. Let's go step by step.   
   
First, we need to clean up the old posts. So we just nuke the posts folder and recreate it:   
```sh
rm -rf $BLOG_DIR
mkdir $BLOG_DIR
```
   
    
 Then, we run obsidianhtml passing the correct configs (the file above ☝️):   
 ```sh   
obsidianhtml -i $OBSIDIANHTML_CONFIG_YML   
```

We remove unnecessary files (the mandatory, useless and empty Index.md file), move the generated md files to the blog's folder, and clean the output folder, since we won't need it again:
```sh
rm ./output/md/index.md
mv ./output/md/* $BLOG_DIR
rm -rf ./output
```
   
   
Then, we go to the blog posts folder, tweak the links so that they're not relative anymore (mostly to prevent RSS issues), and move the assets folder to the static folder of the [SvelteKit](../notes/SvelteKit) app:   
```sh
cd $BLOG_DIR
find . -type f -name "*.md" -print0 | xargs -0 sed -i "s/\)/)/g"
find . -type f -name "*.md" -print0 | xargs -0 sed -i "s/(\.\//(\/blog\//g"
rm -rf ../../static/blog/
mkdir ../../static/blog/
mv assets ../../static/blog/
cd -
```
