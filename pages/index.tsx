import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from './components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}

export default Home