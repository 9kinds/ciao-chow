import { getAllChowIds, getChowData } from '../../lib/fetch'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from './[id].module.css'

export default function Detail({ chowData }) {
    const filterResponse = (prop) => {
        if (prop === true) {
            return 'yes'
        } else if (prop === false) {
            return 'no'
        } else return 'not specified'
    }
    const noShouting =
        chowData.name.charAt(0).toUpperCase() +
        chowData.name.slice(1).toLowerCase().trim()

    return (
        <Layout pageTitle={`A chow named ${noShouting}`}>
            <div className="flex flex-col">
                <span className="text-5xl font-serif -m-5">Meet</span>{' '}
                <h1 className="text-center mb-6 pl-6">{noShouting}!</h1>
            </div>
            <div
                className={
                    chowData.tags.length > 0
                        ? 'flex flex-col w-full items-center sm:flex-row sm:justify-center '
                        : ''
                }
            >
                {chowData.primary_photo_cropped &&
                chowData.primary_photo_cropped.small ? (
                    <Image
                        className="block object-cover py-4"
                        src={chowData.primary_photo_cropped.small}
                        alt={`a dog named ${noShouting}`}
                        width={300}
                        height={300}
                    />
                ) : (
                    <Image
                        className="block"
                        width={300}
                        height={300}
                        src="/No_image_available.svg"
                        alt="No image available for this pet"
                    />
                )}
                {chowData.tags.length > 0 ? (
                    <div className="cute-border py-4 px-6 my-4 sm:ml-4">
                        {noShouting} is described as:{' '}
                        <ul className="list-disc list-inside">
                            {chowData.tags.map((value) => (
                                <li key={value}>{value.toLowerCase()}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
            <table className="w-full max-w-xl">
                <caption className={styles.caption}>
                    A few facts about {noShouting}:
                </caption>
                <tbody>
                    <tr>
                        <th className={styles.textAlignUnset}>age</th>
                        <td>{chowData.age}</td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>primary breed</th>
                        <td>{chowData.breeds.primary}</td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>
                            secondary breed
                        </th>
                        <td>{chowData.breeds.secondary}</td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>declawed</th>
                        <td>{filterResponse(chowData.attributes.declawed)}</td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>house trained</th>
                        <td>
                            {filterResponse(chowData.attributes.house_trained)}
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>
                            spayed/neutered
                        </th>
                        <td>
                            {filterResponse(
                                chowData.attributes.spayed_neutered
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>special needs</th>
                        <td>
                            {filterResponse(chowData.attributes.special_needs)}
                        </td>
                    </tr>
                    <tr>
                        <th className={styles.textAlignUnset}>location</th>
                        <td>
                            {chowData.contact.address.city},{' '}
                            {chowData.contact.address.state}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="mt-6 mb-4">
                Would you like to learn more about {noShouting}?
            </h3>
            {chowData.contact.email ? (
                <a
                    className="pl-4 block mb-4"
                    href={`mailto:{chowData.contact.email}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>{' '}
                    {chowData.contact.email}
                </a>
            ) : null}
            {chowData.contact.phone ? (
                <a className="pl-4 block mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>{' '}
                    {chowData.contact.phone}
                </a>
            ) : null}
            <a className="pl-4 block mb-4" href={chowData.url}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>{' '}
                View {chowData.name} on the Petfinder site
            </a>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const chowData = await getChowData(params.id)
    return { props: { chowData } }
}
