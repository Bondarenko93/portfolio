import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Content } from './components/codebase/content'
import { Layout } from './components/layout'

import dynamic from 'next/dynamic'

const CodeBase: NextPage = () => {

  return (
    <Layout>
      <Head>
        <title>Blog Serhii Bondarenko</title>
        <meta name="description" content="Blog web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
    </Layout>
  )
}

export default CodeBase
