import Layout from '../components/Layout'
import Post from '../components/Post'
import { getAllPostData } from '../lib/posts'

const BlogPage = ({ posts }) => {
  return (
    <Layout title="BlogPage">
      <h3 className="text-4xl">BlogPage</h3>
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export default BlogPage

export async function getStaticProps() {
  const posts = await getAllPostData()
  return {
    props: { posts },
  }
}
