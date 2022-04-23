import React from "react";
import { GetStaticProps } from "next";

import { getAllPostsData } from "@/lib/posts";
import Layout from "@/components/Layout";
import Post from "@/components/Post";

type Props = {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
};

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <Layout title="blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllPostsData();

  return {
    props: {
      posts,
    },
  };
};
