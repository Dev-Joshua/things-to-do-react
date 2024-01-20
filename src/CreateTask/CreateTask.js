import { CreateTodoButton } from "../CreateTaskButton/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import React from "react";
import "./CreateTask.css";
import taskImage from "../assets/createTaskImg.svg";
import { TodoWindow } from "../ModalWindow";

function CreateTask() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <>
      <h2>Create new task</h2>
      <p>Click here to add a pending task that you have to do...</p>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoWindow />
        </Modal>
      )}

      <img style={{ marginTop: "50px" }} src={taskImage} alt="tasks" />
    </>
  );
}

export { CreateTask };
