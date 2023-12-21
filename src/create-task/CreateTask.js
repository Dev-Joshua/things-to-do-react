import { CreateTodoButton } from "../CreateTodoButton";
import React from "react";
import "./CreateTask.css";
import taskImage from "../assets/16736617_5802647.svg";

function CreateTask() {
  return (
    <>
      <h2>Create new task</h2>
      <label>Task Name</label>
      <input placeholder="Enter a new task..." type="text" />
      <CreateTodoButton />
      <img src={taskImage} alt="tasks" />
    </>
  );
}

export { CreateTask };
