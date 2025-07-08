export default function Icon({ type, onClick }) {
  switch (type) {
    case 'add':
      return (
        <button onClick={onClick} className="icon-add-btn">
          Add
        </button>
      );
    case 'delete':
      return (
        <button onClick={onClick} className="icon-delete-btn">
          Delete
        </button>
      );
    default:
      return null;
  }
}