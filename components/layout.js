import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = 'Ciao, Chow!'

export default function Layout({ children, home }){
    return <div className={styles.container}>
    <Head>
    <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
    </Head>
    <header>
    {home ? <span>menu</span> : <ul><li><Link href="/"><a>home</a></Link></li><li>menu</li></ul>}
    </header>
    <main>{children}</main>
    </div>
}
