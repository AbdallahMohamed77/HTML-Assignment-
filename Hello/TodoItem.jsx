import styles from "./App.module.css";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? styles.completed : ""}>
        {todo.todo}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
