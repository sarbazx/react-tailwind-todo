// Dependencies
import React, { useState } from "react";
import Todo from "./Todo";
import TodoModel, { status } from "../dto/Todo";
import Form from "./Form";
const TODOS = [
  new TodoModel("Learn Tailwind"),
  new TodoModel("Learn React"),
  new TodoModel("Learn Svelte"),
  new TodoModel("Learn Vue")
];

export default function Todos() {
  const [todos, setTodos] = useState(TODOS);
  const addTodo = (task) => {
    const todo = new TodoModel(task);
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };
  const toggleTodoStatus = (todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((prevTodo) => {
        if (prevTodo.id === todo.id) {
          if (todo.status === status.completed) {
            todo.status = status.todo;
          } else {
            todo.status = status.completed;
          }

          return todo;
        }
        return prevTodo;
      });
      return updatedTodos;
    });
  };
  return (
    <div>
      <Form addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleStatus={toggleTodoStatus.bind(null, todo)}
        />
      ))}
    </div>
  );
}
