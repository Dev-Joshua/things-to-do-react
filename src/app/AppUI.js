import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../ItemTask/TodoItem";
import { CreateTask } from "../CreateTask/CreateTask";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const { loading, error, completeTodo, deleteTodo, searchedTodos } =
    React.useContext(TodoContext);
  return (
    <>
      <section className="Container-app">
        <div className="Container-createT">
          <CreateTask />
        </div>
        <div className="Container-tasks">
          <h1>Your tasks</h1>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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

export { AppUI };
