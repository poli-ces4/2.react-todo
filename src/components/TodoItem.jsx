/* eslint-disable react/prop-types */
import style from "./TodoItem.module.css";
const TodoItem = ({ todo }) => {
  return (
    <li className={style.list}>
      <div className={`${style.listItem}`}>{todo.title}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
        <button>Check</button>
      </div>
    </li>
  );
};

export default TodoItem;
