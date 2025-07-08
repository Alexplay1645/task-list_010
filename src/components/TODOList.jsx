import { useState, useEffect } from 'react';
import List from './List';
import Icon from './Icon';
import { v4 as uuidv4 } from 'uuid';

export default function TODOList() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskTitle.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        title: taskTitle.trim(),
        status: false
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const updateTaskStatus = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const date = new Date();
  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = month + ' ' + day + ', ' + year;

  return (
    <div className='container'>
      <h1>Note your tasks</h1>
      <span>{formattedDate}</span>

      <div className='input-filed'>
        <input
          type='text'
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <label>Task name</label>
        <Icon type="add" onClick={addTask} />
      </div>

      <List
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        removeTask={removeTask}
      />
    </div>
  );
}