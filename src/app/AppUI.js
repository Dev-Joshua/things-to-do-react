import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../item-task/TodoItem";
import { CreateTask } from "../create-task/CreateTask";

function AppUI(props) {
  return (
    <>
      <section className="Container-app">
        <div className="Container-createT">
          <CreateTask />
        </div>
        <div className="Container-tasks">
          <h1>Your tasks</h1>
          <TodoCounter
            completed={props.completedTodos}
            total={props.totalTodos}
          />
          <TodoSearch
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
          />

          <TodoList>
            {props.loading && <p>Estamos cargando...</p>}
            {props.error && <p>¡Ocurrio un error!</p>}
            {!props.loading && props.searchedTodos.length === 0 && (
              <p>¡Crea tu primer TODO!</p>
            )}
            {props.searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => props.completeTodo(todo.text)}
                onDelete={() => props.deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
      </section>
    </>
  );
}

export { AppUI };
