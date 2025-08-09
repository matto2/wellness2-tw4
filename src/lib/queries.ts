import groq from "groq";

export const postsList = groq`*[_type=="post"]|order(publishedAt desc){
  _id, title, "slug": slug.current, mainImage, publishedAt, excerpt
}`;

export const postBySlug = groq`*[_type=="post" && slug.current==$slug][0]{
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  body,
  videoUrl,
  "videoPoster": videoPoster
}`;

export const postSlugs = groq`*[_type=="post" && defined(slug.current)][]{
  "slug": slug.current
}`;
