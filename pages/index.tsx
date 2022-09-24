import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Content } from '../components/home/content'
import { Layout } from '../components/layout'

import dynamic from 'next/dynamic'

const Home: NextPage = () => {
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

export default Home
