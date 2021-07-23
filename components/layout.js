import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Ciao, Chow!'

export default function Layout({ children, home }) {
    return (
        <div className="flex flex-col mt-12 text-gray-700">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <main className="mx-6 mb-4 mt-12">{children}</main>
            <nav className="w-full absolute bottom-0 p-6 flex flex-row justify-between items-center bg-gray-700 ">
                {!home ? (
                    <Link href="/">
                        <a className="text-gray-50">back to home</a>
                    </Link>
                ) : (
                    <span> </span>
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
