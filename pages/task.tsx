import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout from "@/components/Layout";
import { getTasks } from "@/lib/tasks";

type Props = {
  tasks: {
    id: string;
    title: string;
    description: string;
  }[];
};

const Task: React.FC<Props> = ({ tasks }) => {
  return (
    <Layout title="task page">
      <ul className="m-10">
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id}</span>
            {" : "}
            <Link href={`/tasks/${task.id}`}>
              <a className="text-blue-500 hover:bg-gray-200 border-b border-blue-500 cursor-pointer">
                {task.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Task;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tasks = await getTasks();

  return {
    props: {
      tasks,
    },
  };
};
