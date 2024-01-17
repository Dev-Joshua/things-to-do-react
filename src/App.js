import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./item-task/TodoItem";
import { CreateTask } from "./create-task/CreateTask";

import "./App.css";

// const defaultTodos = [
//   { text: "Programar en React", completed: true },
//   { text: "Hacer ejercicios de torso", completed: true },
//   { text: "Sacar a Zeus", completed: false },
//   { text: "Implementar el nuevo componente en el proyecto", completed: false },
//   { text: "Usar estados en React", completed: false },
// ];

// localStorage.setItem("Todos_v1", JSON.stringify(defaultTodos));
// localStorage.removeItem("Todos_v1");

function App() {
  const localStorageTodos = localStorage.getItem("Todos_v1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("Todos_v1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("Todos_v1", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text === text);
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };

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
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
      </section>
    </>
  );
}

export default App;
