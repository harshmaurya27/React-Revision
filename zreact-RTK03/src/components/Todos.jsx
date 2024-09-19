import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function removeTodoHandler(todo) {
    dispatch(removeTodo(todo));
  }
  return (
    <>
      <div>Todos</div>

      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodoHandler(todo.id)}>x</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
