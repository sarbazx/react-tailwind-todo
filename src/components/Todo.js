// Dependencies
import React from "react";
import { status } from "../dto/Todo";

export default function Todo({ todo, toggleStatus }) {
  const toggleHandler = () => toggleStatus();
  return (
    <div>
      <input
        type="checkbox"
        onClick={toggleHandler}
        defaultChecked={todo.status === status.completed}
      />
      <span>{todo.task}</span>
    </div>
  );
}
