import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <p className="P-counter">
      You have completed <strong>{completedTodos}</strong> of{" "}
      <strong>{totalTodos}</strong> tasks
    </p>
  );
}

export { TodoCounter };
