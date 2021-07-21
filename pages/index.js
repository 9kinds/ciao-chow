import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

import { getAllChows } from '../lib/fetch'

export default function Home({ chowList }) {
    return (
        <Layout home>
            <h1 className="text-center">Ciao, Chow!</h1>
            <h2 className="text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                    />
                </svg>{' '}
                find <em>your</em> floof!{' '}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                    />
                </svg>
            </h2>
            <p className="py-6">witty copy coming soon! :p </p>
            <div className="flex flex-col">
                {chowList.map((chow) => (
                    <Link href={`/details/${chow.id}`} key={chow.id}>
                        <a className="card">
                            {' '}
                            <h2 className="pb-1">{chow.name}</h2>
                            {chow.primary_photo_cropped &&
                            chow.primary_photo_cropped.small ? (
                                <Image
                                    src={chow.primary_photo_cropped.small}
                                    alt={`a dog named ${chow.name}`}
                                    width={250}
                                    height={250}
                                />
                            ) : (
                                <Image
                                    width={250}
                                    height={250}
                                    src="/No_image_available.svg"
                                    alt="No image available for this pet"
                                />
                            )}
                        </a>
                    </Link>
                ))}
            </div>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Vercel
                </a>
            </footer>
        </Layout>
    )
}
export async function getServerSideProps() {
    const chowList = await getAllChows()
    return { props: { chowList } }
}
