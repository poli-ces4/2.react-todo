/* eslint-disable react/prop-types */
import style from "./Form.module.css";

const Form = ({ inputTodo, setInputTodo }) => {
  return (
    <form>
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
