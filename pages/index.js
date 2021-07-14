import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getAllChows } from '../lib/fetch'

export default function Home({ chowList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ciao, Chow!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ciao, Chow!
        </h1>
        <p className={styles.description}>
          find <em>your</em> floof! 
        </p>
        <p>these dogs are currently available for adoption and have
        their primary breed listed as Chow Chow. <a href="">Click here</a> to see dogs
        who have Chow Chow listed among their secondary breeds.</p>
<div className={styles.grid}>
        {chowList.map((chow) => 
        <a href="" key={chow.id} className={styles.card}>
    {chow.primary_photo_cropped && chow.primary_photo_cropped.small ? 
    <Image 
    src={chow.primary_photo_cropped.small} 
    width={300} height={300} /> 
    : <div className={styles.placeholder}><p>no image available</p></div>}
    <h2>{chow.name}</h2></a>
  )}</div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
export async function getServerSideProps(){
  const chowList = await getAllChows()
  return { props: { chowList, }}
}

           