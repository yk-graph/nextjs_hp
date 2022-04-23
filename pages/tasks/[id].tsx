import React from "react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "@/components/Layout";
import { getTask, getTaskIds } from "@/lib/tasks";

type Props = {
  task: {
    id: string;
    title: string;
    description: string;
  };
};

const Tasks: React.FC<Props> = ({ task }) => {
  return (
    <Layout title={task.title}>
      <p className="m-4">
        {"ID : "}
        {task.id}
      </p>
      <p className="mb-8 text-xl font-bold">{task.title}</p>
      <p className="px-10">{task.description}</p>
      <Link href="/task">
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
            <span>Back to task-page</span>
          </div>
        </a>
      </Link>
    </Layout>
  );
};

export default Tasks;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTaskIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const task = await getTask(String(params!.id));
  return {
    props: {
      task,
    },
  };
};
