import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
      <title>Snap</title>
      <meta
        title='description'
        content="Add your own meetups and create an amazing connection opportunities."
      />
    </Head>
    </div>
  )
}

export default Home
