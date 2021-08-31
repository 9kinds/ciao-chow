import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Ciao, Chow!'

export default function Layout({ children, home, pageTitle }) {
    return (
        <div className="mt-12 text-gray-700">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={siteTitle} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Search Chow Chows currently available on Petfinder"
                />
                <title>{pageTitle}</title>
            </Head>
            <main className="flex flex-col items-center mx-6 mt-14 mb-6">
                {children}
            </main>
            <nav className="w-full p-6 flex flex-row justify-between items-center bg-gray-700 ">
                {home ? (
                    <Link href="#">
                        <a className="text-gray-50">back to top</a>
                    </Link>
                ) : (
                    <Link href="/">
                        <a className="text-gray-50">back to home</a>
                    </Link>
                )}
                <a href="https://github.com/9kinds/ciao-chow">
                    <Image
                        alt="click to go to this repo on GitHub"
                        width={32}
                        height={32}
                        src="/GitHub-Mark-Light-32px.png"
                    />
                </a>
            </nav>
        </div>
    )
}
