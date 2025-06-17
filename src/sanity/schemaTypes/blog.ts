import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'A unique identifier for the blog post (e.g., post-1)',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the blog post',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post as a featured post',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
