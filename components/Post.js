import Link from 'next/link'

export default function Post({ post }) {
  return (
    <li>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`}>
        <a className="text-blue-500 hover:bg-gray-200 border-b border-blue-500 cursor-pointer">
          {post.title}
        </a>
      </Link>
    </li>
  )
}
