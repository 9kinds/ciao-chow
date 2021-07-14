import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAllChows } from '../lib/fetch'

export default function Home({ chowList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ciao, Chow!
        </h1>
        <p className={styles.description}>
          find <em>your</em> floof! 
        </p>
        <ul>
        {chowList.map(
          (chow) => (
            <li key={chow.id}>{chow.name} </li>))}
        </ul>

        {chowList.map((chow) => 
    chow.primary_photo_cropped && chow.primary_photo_cropped.medium ? <Image key={chow.id} src={chow.primary_photo_cropped.medium} width={450} height={450} /> : <span key={chow.id}>no image available</span>
  )}

       <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
export async function getStaticProps(){
  const chowList = await getAllChows()
  return { props: { chowList, }}
}

           