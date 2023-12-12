import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
import "./App.css";

const defaultTodos = [
  { text: "Programar en React", completed: true },
  { text: "Hacer ejercicio", completed: false },
  { text: "Sacar a Zeus", completed: true },
  { text: "Implementar el nuevo componente en el proyecto", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={23} total={31} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
