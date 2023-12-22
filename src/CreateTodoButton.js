function CreateTodoButton() {
  return (
    <button
      style={{
        padding: "12px",
        borderRadius: "12px",
        border: "none",
        backgroundColor: "#ff8156",
        color: "#fff",
        fontSize: "15px",
        letterSpacing: "0.5px",
      }}
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
