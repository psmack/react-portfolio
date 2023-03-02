import Head from 'next/head'
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Techstack from '../components/Techstack';



export default function Home() {
   return (
    <div>
      <Head>
        <title>Pailin Mack Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}
