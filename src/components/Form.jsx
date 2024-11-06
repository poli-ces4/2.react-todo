/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";

const Form = ({ inputTodo, setInputTodo, todos, setTodos }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const recordTodo = { id: uuidv4(), title: inputTodo, completed: false };
    setTodos([...todos, recordTodo]);
    setInputTodo("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Enter todo"
        className={style.taskInput}
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
};

export default Form;
