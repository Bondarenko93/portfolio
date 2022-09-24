import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Content } from './components/contact/content'
import { Layout } from './components/layout'


const CodeBase: NextPage = () => {

    return (
        <Layout>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Blog web developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content />
        </Layout>
    )
}

export default CodeBase
