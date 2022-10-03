import type { NextPage } from 'next'
import Head from 'next/head'
import { Content } from '../components/home/content'
import { Layout } from '../components/layout'

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
