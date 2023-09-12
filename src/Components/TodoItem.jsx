export default function TodoItem({ text, completed, onClick, onDelete }) {
    return (
      <div>
        <span style={{ textDecoration: completed ? "line-through" : "none" }} onClick={onClick}>
          {text}
        </span>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }