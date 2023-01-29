import Banner from '@/components/banner'
import Header from '@/components/header'
import Head from 'next/head'


export default function Homepage() {
  return (
    <>
      <Head>
        <title>Manuel Afonso Dev Blog | Manuel Afonso</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      {/* aqui você vai chamar os components que vai criar para pagina principal  */}
    </>
  )
}