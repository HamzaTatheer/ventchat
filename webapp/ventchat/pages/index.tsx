import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/components/Home.module.scss'
import Appbar from './common/components/Appbar'
import Welcome from './Welcome'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <Appbar/>
      </Head>


      <Welcome/>

      
      <footer className={styles.footer}>
          Vent Chat
      </footer>
    </div>
  )
}

export default Home
