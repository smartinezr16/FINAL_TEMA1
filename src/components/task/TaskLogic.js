import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import TasksUI from "./TasksUI";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const tasksRef = collection(db, "tasks");

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(tasksRef);
    setTasks(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title || !description) return;
    await addDoc(tasksRef, { title, description, completed: false });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleUpdateTaskStatus = async (task) => {
    const taskDoc = doc(db, "tasks", task.id);
    await updateDoc(taskDoc, { completed: !task.completed });
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
    fetchTasks();
  };

  const handleEditTask = (task) => {
    setEditTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    if (!editTitle || !editDescription) return;
    const taskDoc = doc(db, "tasks", editTaskId);
    await updateDoc(taskDoc, {
      title: editTitle,
      description: editDescription,
    });
    setEditTaskId(null);
    setEditTitle("");
    setEditDescription("");
    fetchTasks();
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditTitle("");
    setEditDescription("");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TasksUI
      tasks={tasks}
      title={title}
      description={description}
      editTaskId={editTaskId}
      editTitle={editTitle}
      editDescription={editDescription}
      onAddTask={handleAddTask}
      onTitleChange={(e) => setTitle(e.target.value)}
      onDescriptionChange={(e) => setDescription(e.target.value)}
      onEditTask={handleEditTask}
      onEditTitleChange={(e) => setEditTitle(e.target.value)}
      onEditDescriptionChange={(e) => setEditDescription(e.target.value)}
      onUpdateTask={handleUpdateTask}
      onCancelEdit={handleCancelEdit}
      onDeleteTask={handleDeleteTask}
      onUpdateTaskStatus={handleUpdateTaskStatus}
    />
  );
};

export default TasksContainer;