import React from "react";
import "./ModalWindow.css";
import { TodoContext } from "../TodoContext";

function TodoWindow() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Write your todo...</label>
      <textarea placeholder="Enter a new task..." type="text" />

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
