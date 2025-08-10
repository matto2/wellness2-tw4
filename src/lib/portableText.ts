import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "@portabletext/types";
export const ptToHtml = (blocks?: PortableTextBlock[]) =>
  blocks ? toHTML(blocks) : "";
