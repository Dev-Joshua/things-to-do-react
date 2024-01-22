import React from "react";
import "./ModalWindow.css";
import { TodoContext } from "../TodoContext";

function TodoWindow() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your todo...</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Enter a new task..."
        type="text"
      />

      <div className="TodoForm-buttonContainer">
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { TodoWindow };
