/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";
import { useEffect } from "react";

const Form = ({ inputTodo, setInputTodo, todos, setTodos, edit, setEdit }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editTodo(edit);
    } else {
      const recordTodo = { id: uuidv4(), title: inputTodo, completed: false };
      setTodos([...todos, recordTodo]);
      setInputTodo("");
    }
  };

  const editTodo = (todo) => {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, title: inputTodo } : item
    );
    setTodos(newTodos);
    setEdit(null);
  };

  useEffect(() => {
    if (edit) setInputTodo(edit.title);
    else setInputTodo("");
  }, [edit]);

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
        {edit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Form;
