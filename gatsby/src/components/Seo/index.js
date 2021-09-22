import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

function Seo({ title }) {
  const { site, siteInformation } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      siteInformation: sanitySiteInformation {
        title
      }
    }
  `)

  console.log({ siteInformation })

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
        // TODO: Add currentLanguage dynamically
      }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
    />
  )
}

export default Seo
