import React, { useRef } from "react";

export default function Form({ addTodo }) {
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    addTodo(inputRef.current.value);
  };
  const keyUpHandler = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      submitHandler.bind(this);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input ref={inputRef} type="text" name="task" onKeyUp={keyUpHandler} />
    </form>
  );
}
