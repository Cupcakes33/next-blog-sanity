export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'text',
      title: 'Overview',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Frontend', value: 'Frontend'},
          {title: 'Library', value: 'Library'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'tag',
      type: 'array',
      title: 'Tag',
      of: [{type: 'string'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Content',
    },
  ],
}
