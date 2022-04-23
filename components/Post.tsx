import { memo } from "react";
import Link from "next/link";

type Props = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <li>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <a className="text-blue-500 hover:bg-gray-200 border-b border-blue-500 cursor-pointer">
          {post.title}
        </a>
      </Link>
    </li>
  );
};

export default memo(Post);
