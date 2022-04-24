import { db } from "@/firebase/nodeApp";

export const getTasks = async () => {
  const taskRef = await db.collection("tasks").get();
  const tasks = taskRef.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    description: doc.data().description,
  }));

  return tasks;
};

export const getTaskIds = async () => {
  const taskRef = await db.collection("tasks").get();
  return taskRef.docs.map((doc) => ({
    params: {
      id: doc.id,
    },
  }));
};

export const getTask = async (id: string) => {
  return (await db.collection("tasks").doc(id).get()).data();
};
