/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css";
const TodoItem = ({ todo, deleteTodo, checkTodo, setEdit }) => {
  return (
    <li className={style.list}>
      <div
        className={`${style.listItem} 
      ${todo.completed ? style.completed : ""}`}
      >
        {todo.title}
      </div>
      <div>
        <button onClick={() => setEdit(todo)}>Edit</button>
        <button onClick={() => deleteTodo(todo)}>Delete</button>
        <button onClick={() => checkTodo(todo)}>Check</button>
      </div>
    </li>
  );
};

export default TodoItem;
