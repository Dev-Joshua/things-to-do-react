import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "Complete"}`}>
      <span className={`Icon  ${props.completed && "Icon-check--active"}`}>
        O
      </span>
      {/* <span className="Icon Icon-check Icon-check--active">
        <i class="fa-sharp fa-solid fa-circle-check"></i>
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <i className="fa-sharp fa-solid fa-xmark"></i>
      </span>
    </li>
  );
}

export { TodoItem };
