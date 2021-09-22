const dotenv = require('dotenv') // can also do development.env - production.env
dotenv.config({ path: '.env' })

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-sanity',
      // These are taken from manage.sanity.io
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
  siteMetadata: {
    title: `Lingua Translation Bureau`,
    description: `A translation bureau`,
    copyright: `This website is copyright 2021 Lingua TB & YUMA©`,
    contact: `info@example.com`,
    siteUrl: `https://example.com`,
    orgNumber: `112233-4455`,
    whatsApp: `+00000000000`,
    twitter: `@MODiJALABi`,
  },
}
