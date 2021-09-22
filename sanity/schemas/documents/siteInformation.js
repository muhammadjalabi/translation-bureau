export default {
  name: 'siteInformation',
  type: 'document',
  title: 'Site Information',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Brand image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Description of the site for search engines and social media.',
    },

    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Keywords that describes the site.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({ title: `Settings for ${title}` }),
  },
}
