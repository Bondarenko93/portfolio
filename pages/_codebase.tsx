import type { NextPage } from 'next'
import Head from 'next/head'
import { Content } from '../components/codebase/content'
import { Layout } from '../components/layout'

const CodeBase: NextPage = () => {

  return (
    //@ts-ignore
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
