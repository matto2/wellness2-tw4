// GROQ queries for Sanity
export const postsList = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "author": author->{name, image},
  "coverImage": coverImage
}`;

export const postBySlug = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  content,
  "author": author->{name, image},
  "coverImage": coverImage,
  "videoFile": videoFile,
  "videoPoster": videoPoster
}`;

export const postSlugs = `*[_type == "post"]{ "slug": slug.current }`;
