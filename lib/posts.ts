import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getAllPostsData = async () => {
  const res = await fetch(apiUrl);
  const posts = await res.json();
  return posts;
};

export const getAllPostsIds = async () => {
  const res = await fetch(apiUrl);
  const posts = (await res.json()) as Post[];
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const res = await fetch(`${apiUrl}/${id}`);
  const post = await res.json();
  return post;
};
