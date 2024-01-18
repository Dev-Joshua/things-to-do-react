import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../ItemTask/TodoItem";
import { CreateTask } from "../CreateTask/CreateTask";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";

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
            {props.loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {props.error && <TodosError />}
            {!props.loading && props.searchedTodos.length === 0 && (
              <EmptyTodos />
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
