import Head from 'next/head'
import Link from 'next/link'

export const siteTitle = 'Ciao, Chow!'

export default function Layout({ children, home }) {
    return (
        <div className="mx-6 mb-4 mt-12 text-gray-700">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <main>{children}</main>
        </div>
    )
}
