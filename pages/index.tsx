import React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header/Header'

export default function Front() {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <main>Hello Next App</main>
      <Header />
    </>
  )
}
