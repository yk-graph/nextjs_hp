import React from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

import { getAllPostsIds, getPostData } from "@/lib/posts";
import Layout from "@/components/Layout";

type Props = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

const Posts: React.FC<Props> = ({ post }) => {
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <a>
          <div className="flex mt-12 cursor-pointer">
            <svg
              className="mr-3 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Back to blog-page</span>
          </div>
        </a>
      </Link>
    </Layout>
  );
};

export default Posts;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(String(params!.id));
  return {
    props: {
      post,
    },
  };
};
