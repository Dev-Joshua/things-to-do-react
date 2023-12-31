import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./item-task/TodoItem";
import { CreateTask } from "./create-task/CreateTask";

import React from "react";
import "./App.css";

const defaultTodos = [
  { text: "Programar en React", completed: true },
  { text: "Hacer ejercicios de torso", completed: true },
  { text: "Sacar a Zeus", completed: false },
  { text: "Implementar el nuevo componente en el proyecto", completed: false },
  { text: "Usar estados en React", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log("Los usuarios buscan " + searchValue);

  return (
    <>
      <section className="Container-app">
        <div className="Container-createT">
          <CreateTask />
        </div>
        <div className="Container-tasks">
          <h1>Your tasks</h1>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </div>
      </section>
    </>
  );
}

export default App;
