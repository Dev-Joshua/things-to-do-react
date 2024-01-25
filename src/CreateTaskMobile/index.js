import "./CreateTaskMobile.css";

function CreateTaskMobile({ setOpenModal }) {
  return (
    <button
      className="MobileButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreateTaskMobile };
