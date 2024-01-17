import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./item-task/TodoItem";
import { CreateTask } from "./create-task/CreateTask";

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

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text === text);
    newTodos[indexTodo].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
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
