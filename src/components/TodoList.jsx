/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, setEdit }) => {
  const deleteTodo = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const checkTodo = (todo) => {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          setEdit={setEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
