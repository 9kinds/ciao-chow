import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

import { getAllChows } from '../lib/fetch'

export default function Home({ chowList }) {
    const noShouting = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }
    return (
        <Layout home pageTitle="Ciao, Chow! Find your floof today!">
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
            <p className="mt-6 mb-3">
                Do you love Chows? <em>We</em> love Chows! And we want to help
                Chows find loving homes.
            </p>
            <p className="mb-9">
                {' '}
                These are dogs currently available for adoption through
                Petfinder, with Chow Chow listed as their primary or secondary
                breed type. Click on any picture to learn more about that
                pupper.
            </p>
            <div className="card-container">
                {chowList.map((chow) => (
                    <Link href={`/details/${chow.id}`} key={chow.id}>
                        <a className="card cute-border hover:border-blue-700">
                            {' '}
                            <h2 className="pb-1">{noShouting(chow.name)}</h2>
                            {chow.primary_photo_cropped &&
                            chow.primary_photo_cropped.small ? (
                                <Image
                                    src={chow.primary_photo_cropped.small}
                                    alt={`a dog named ${noShouting(chow.name)}`}
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
        </Layout>
    )
}
export async function getServerSideProps() {
    const chowList = await getAllChows()
    return { props: { chowList } }
}
