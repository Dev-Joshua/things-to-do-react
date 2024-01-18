import { CreateTodoButton } from "../CreateTaskButton/CreateTodoButton";
import React from "react";
import "./CreateTask.css";
import taskImage from "../assets/createTaskImg.svg";

function CreateTask() {
  return (
    <>
      <h2>Create new task</h2>
      <label>Task Name</label>
      <input placeholder="Enter a new task..." type="text" />
      <CreateTodoButton />
      <img style={{ marginTop: "50px" }} src={taskImage} alt="tasks" />
    </>
  );
}

export { CreateTask };
