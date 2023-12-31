import { useState } from 'react';

const TaskForm = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { id: new Date(), name: taskName, completed: false }]);
      setTaskName(''); //reseteamo a una cadena vacia
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">
            Nueva tarea
          </label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={addTask}>
          Agregar tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
