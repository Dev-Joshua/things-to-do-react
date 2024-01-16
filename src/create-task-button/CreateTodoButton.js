import "./CreateTodoButtton.css";

function CreateTodoButton() {
  return (
    <button
      onClick={(event) => {
        console.log("diste un click");
        console.log(event);
      }}
    >
      Create task
    </button>
  );
}

export { CreateTodoButton };
