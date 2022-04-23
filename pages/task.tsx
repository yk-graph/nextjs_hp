import React from "react";
import { GetStaticProps } from "next";

import Layout from "@/components/Layout";
import { db } from "@/firebase";

type Props = {
  tasks: {
    id: string;
    title: string;
  };
};

const Task: React.FC<Props> = ({ tasks }) => {
  return <Layout title="task page">tasks</Layout>;
};

export default Task;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const taskRef = await db.collection("tasks").get();
  const tasks = taskRef.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
  }));

  return {
    props: {
      tasks,
    },
  };
};
