import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@portabletext/types";

export const ptToHtml = (blocks?: PortableTextBlock[]) =>
  blocks
    ? toHTML(blocks, {
        components: {
          marks: {
            link: ({ children, value }) => {
              const href = value?.href || "#";
              const ext = /^https?:\/\//.test(href);
              return `<a href="${href}" ${
                ext ? 'target="_blank" rel="noopener"' : ""
              }>${children}</a>`;
            },
          },
        },
      })
    : "";
