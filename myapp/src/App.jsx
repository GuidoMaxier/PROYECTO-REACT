import React, { useState, useEffect } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const storedTasks = localStorage.getItem('tasks');
  const [tasks, setTasks] = useState(JSON.parse(storedTasks) || []);

  // Efecto de Actualización
  useEffect(() => {
    // Guardar la lista de tareas en localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Lista de Tareas</h1>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <TaskForm tasks={tasks} setTasks={setTasks} />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

