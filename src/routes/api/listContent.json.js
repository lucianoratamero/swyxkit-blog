/**
 * @type {import("@sveltejs/kit").RequestHandler}
 */
import { processAll } from "$lib/markdown.js";

export async function get() {
  const list = await processAll();
  return {
    body: list,
    headers: {
      "Cache-Control": `max-age=0, s-maxage=${60}` // 1 minute.. for now
    }
  };
}
