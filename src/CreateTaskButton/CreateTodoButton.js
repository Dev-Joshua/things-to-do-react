import "./CreateTodoButtton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      onClick={() => {
        setOpenModal((state) => !state);
        console.log("diste un click");
      }}
    >
      Create task
    </button>
  );
}

export { CreateTodoButton };
