import Head from 'next/head'

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | HONDA Banzai</title>
      </Head>

      <Header />
    </>
  )
}
