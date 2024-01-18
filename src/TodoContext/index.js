import React from "react";

import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
