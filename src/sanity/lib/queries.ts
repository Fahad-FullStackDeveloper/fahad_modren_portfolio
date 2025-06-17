import { groq } from 'next-sanity'

// Blog queries
export const getAllBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    id,
    title,
    slug,
    excerpt,
    "date": publishedAt,
    "readTime": "5 min read",
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    featured
  }
`

export const getFeaturedBlogsQuery = groq`
  *[_type == "blog" && featured == true] | order(publishedAt desc)[0...1] {
    _id,
    id,
    title,
    slug,
    excerpt,
    "date": publishedAt,
    "readTime": "5 min read",
    "image": mainImage.asset->url,
    "category": categories[0]->title
  }
`

export const getBlogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    id,
    title,
    slug,
    excerpt,
    "date": publishedAt,
    "readTime": "5 min read",
    "image": mainImage.asset->url,
    "category": categories[0]->title,
    body
  }
`

// Project queries
export const getAllProjectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    id,
    title,
    description,
    "image": image.asset->url,
    "tags": technologies,
    "demoUrl": liveUrl,
    githubUrl,
    featured,
    "category": "advanced"
  }
`

export const getFeaturedProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(publishedAt desc) {
    _id,
    id,
    title,
    description,
    "image": image.asset->url,
    "tags": technologies,
    "demoUrl": liveUrl,
    githubUrl,
    featured,
    "category": "advanced"
  }
`