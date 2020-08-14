import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { Header } from './../components/Header/Header'
import { Footer } from './../components/Footer/Footer'
import { Center } from '../components/Center/style'
import { GlobalStyle, theme } from '../shared/theme'

export default function MyApp({ Component, PageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>Next App</title>
      </Head>
      <Header />
      <main className="main">
        <Center>
          <Component {...PageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  )
}
