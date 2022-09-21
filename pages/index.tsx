import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from './components/Header'
import { Pricing } from './components/Pricing'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Pricing/>
      
    </div>
  )
}

export default Home
