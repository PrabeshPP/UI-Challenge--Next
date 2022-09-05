import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.scss'
import { HomeComponent } from '../Component/Home/home_component'

const Home: NextPage = () => {
  return (
    <div className={classes.homeContainer}>
      <Head>
      <title>Snap</title>
      <meta
        title='description'
        content="Add your own meetups and create an amazing connection opportunities."
      />
    </Head>
    <HomeComponent/>
    </div>
  )
}

export default Home
