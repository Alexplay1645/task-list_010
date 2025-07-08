import Item from './Item';

export default function List({ tasks, updateTaskStatus, removeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <Item
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
          updateTaskStatus={updateTaskStatus}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}