// @ts-disable
import fs from "fs";
import { readSync } from "to-vfile";
import unified from "unified";
import parse from "remark-parse";
import gfm from "remark-gfm";
import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import frontmatter from "remark-frontmatter";
import highlight from "rehype-highlight";
import yaml from "js-yaml";
import dayjs from "dayjs";
import _ from "lodash";
import rehypeSlug from "rehype-slug";

let parser = unified()
  .use(parse)
  .use(gfm)
  .use(frontmatter, ["yaml"]);

let runner = unified()
  .use(remark2rehype)
  .use(highlight, { aliases: { "markdown": "ad-info" } })
  .use(rehypeSlug)
  .use(rehypeStringify);

export function process(filename) {
  let tree = parser.parse(readSync(filename));
  let metadata = null;
  if (tree.children.length > 0 && tree.children[0].type == "yaml") {
    metadata = yaml.load(tree.children[0].value);
    tree.children = tree.children.slice(1, tree.children.length);
    metadata.date = dayjs(metadata.date).format("YYYY-MM-DD");
  }
  let content = runner.stringify(runner.runSync(tree));
  if (!metadata) {
    metadata = {
      title: "Error!",
      date: "?",
      excerpt: "Missing Frontmatter! Expected at least a title and a date!"
    };
    content = "Missing Frontmatter! Expected at least a title and a date!";
  }
  return { metadata, content };
}

export async function processAll() {
  const files = fs.readdirSync("src/posts/");
  const postsMetadata = files.map((file) => {
    if (fs.lstatSync(`src/posts/${file}`).isFile()) {
      return process(`src/posts/${file}`);
    }
  })
    .filter(post => Boolean(post))
    .map(post => {
      return post && post.metadata;
    });
  return _.sortBy(postsMetadata, ["date"]).reverse();
}

export async function processAllWithContent() {
  const files = fs.readdirSync("src/posts/");
  const posts = files.map((file) => {
    if (fs.lstatSync(`src/posts/${file}`).isFile()) {
      return process(`src/posts/${file}`);
    }
  }).filter(post => Boolean(post));

  const dateComparator = (post) => _.get(post, "metadata.date");
  return _.orderBy(posts, dateComparator, ["desc"]);
}
