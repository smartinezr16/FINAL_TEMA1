// src/components/Tasks.js
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
import { signOut } from "firebase/auth";
import "./Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const tasksRef = collection(db, "tasks");

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(tasksRef);
    setTasks(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
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

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h1>Gestión de Tareas</h1>

      </header>

      <div className="task-form">
        <h2>Agregar Nueva Tarea</h2>
        <form onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-input"
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-input"
          />
          <button type="submit" className="add-task-button">
            Agregar Tarea
          </button>
        </form>
      </div>

      <div className="tasks-list">
        <h2>Lista de Tareas</h2>
        {tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            {editTaskId === task.id ? (
              <form className="edit-task-form" onSubmit={handleUpdateTask}>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="task-input"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="task-input"
                />
                <button type="submit" className="save-button">
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setEditTaskId(null)}
                  className="cancel-button"
                >
                  Cancelar
                </button>
              </form>
            ) : (
              <div className="task-view">
                <div className="task-content">
                  <h3>{task.title}</h3>
                  
                  <p>{task.description}</p>
                </div>
                <div className="task-actions">
                  <button
                    onClick={() => handleUpdateTaskStatus(task)}
                    className="status-button"
                  >
                    {task.completed ? "Marcar como Pendiente" : "Marcar como Completada"}
                  </button>
                  <button
                    onClick={() => handleEditTask(task)}
                    className="edit-button"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
