import {useState} from 'react';
import styles from "./App.module.css";
function TodoForms({ addTodo }) {
  const [text, setText] = useState("");
    function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
    }
    return (
      <div className={styles.formWrapper}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button className={styles.addButton} onClick={handleSubmit}>
          Add
        </button>
      </div>
    );
   
}
export default TodoForms;