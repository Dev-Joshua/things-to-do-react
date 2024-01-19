import { CreateTodoButton } from "../CreateTaskButton/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import React from "react";
import "./CreateTask.css";
import taskImage from "../assets/createTaskImg.svg";

function CreateTask() {
  const { openModal } = React.useContext(TodoContext);
  return (
    <>
      <h2>Create new task</h2>
      <label>Task Name</label>
      <input placeholder="Enter a new task..." type="text" />
      <CreateTodoButton />

      {openModal && <Modal>La funcionalidada agregar todoo</Modal>}

      <img style={{ marginTop: "50px" }} src={taskImage} alt="tasks" />
    </>
  );
}

export { CreateTask };
