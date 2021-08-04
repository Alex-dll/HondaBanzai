import Head from 'next/head'

import { Civic } from '../components/Civic';
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | HONDA Banzai</title>
      </Head>

      <Header />
      <Civic />

      <Footer/>
    </>
  )
}
