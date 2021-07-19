import { getAllChowIds, getChowData } from '../../lib/fetch'
import Layout from '../../components/layout'

export default function Detail({ chowData }) {
    return <Layout>{chowData.name}</Layout>
}

// this returns an array of possible values for id
export async function getStaticPaths() {
    const paths = await getAllChowIds()
    return { paths, fallback: false }
}

// this fetches the necessary data for the post with id
export async function getStaticProps({ params }) {
    const chowData = await getChowData(params.id)
    return { props: { chowData } }
}
