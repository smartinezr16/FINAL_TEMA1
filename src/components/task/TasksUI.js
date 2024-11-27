import React from "react";
import "./Tasks.css";

const TasksUI = ({
  tasks,
  title,
  description,
  editTaskId,
  editTitle,
  editDescription,
  onAddTask,
  onTitleChange,
  onDescriptionChange,
  onEditTask,
  onEditTitleChange,
  onEditDescriptionChange,
  onUpdateTask,
  onCancelEdit,
  onDeleteTask,
  onUpdateTaskStatus,
}) => {
  return (
    <div className="tasks-container">
      <header className="tasks-header">
        <h1>Gestión de Tareas</h1>
      </header>

      <div className="task-form">
        <h2>Agregar Nueva Tarea</h2>
        <form onSubmit={onAddTask}>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={onTitleChange}
            className="task-input"
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={onDescriptionChange}
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
          <div
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            {editTaskId === task.id ? (
              <form className="edit-task-form" onSubmit={onUpdateTask}>
                <input
                  type="text"
                  value={editTitle}
                  onChange={onEditTitleChange}
                  className="task-input"
                />
                <textarea
                  value={editDescription}
                  onChange={onEditDescriptionChange}
                  className="task-input"
                />
                <button type="submit" className="save-button">
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={onCancelEdit}
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
                    onClick={() => onUpdateTaskStatus(task)}
                    className="status-button"
                  >
                    {task.completed
                      ? "Marcar como Pendiente"
                      : "Marcar como Completada"}
                  </button>
                  <button
                    onClick={() => onEditTask(task)}
                    className="edit-button"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
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

export default TasksUI;