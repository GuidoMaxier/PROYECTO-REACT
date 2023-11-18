import React, { useState } from 'react';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    completeTask();
  };

  return (
    // <li className={`list-group-item ${isCompleted ? 'completed' : ''}`}>
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {task.name}
      <button className="btn btn-success mx-2" onClick={handleComplete}>
        Completar
      </button>
      <button className="btn btn-danger" onClick={deleteTask}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
