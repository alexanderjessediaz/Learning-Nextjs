import Layout from '../../components/layout'
// old
// import { getAllPostIds } from '../../lib/posts'

// new for fetching external data
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )
  }

export async function getStaticPaths() {
const paths = getAllPostIds()
return {
    paths,
    fallback: false
}
}
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


