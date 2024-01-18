import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { AppUI } from "./AppUI";

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
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("Todos_v1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      searchedTodos={searchedTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
