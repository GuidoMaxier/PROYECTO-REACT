import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks }) => {
  const completeTask = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={() => completeTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;

