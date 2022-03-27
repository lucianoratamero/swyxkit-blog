import { process } from "$lib/markdown.js";

export function get({ params }) {
  const { slug } = params;

  const { metadata, content } = process(`src/posts/notes/${slug}.md`);
  const body = JSON.stringify({ metadata, content });

  return {
    headers: {
      "Content-Type": "application/json"
    },
    body
  };
}