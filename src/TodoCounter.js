import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <p style={{ textAlign: "center" }}>
      Has completado <strong>{completedTodos}</strong> de{" "}
      <strong>{totalTodos}</strong> TODOs
    </p>
  );
}

export { TodoCounter };
