import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/'
import { defaultTheme } from './src/components/styles/themes'

export function wrapPageElement({ element, props }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}
