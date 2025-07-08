import Icon from './Icon';

export default function Item({ id, title, status, updateTaskStatus, removeTask }) {
  const classes = ['todo'];
  if (status) {
    classes.push('status');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={status}
          onChange={() => updateTaskStatus(id)}
        />
        <span>{title}</span>
        <Icon type="delete" onClick={() => removeTask(id)} />
      </label>
    </li>
  );
}