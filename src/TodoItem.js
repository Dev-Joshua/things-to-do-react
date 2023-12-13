import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <input type="radio" name="radio"></input>
      {/* <span className="Icon Icon-check Icon-check--active">
        <i class="fa-sharp fa-solid fa-circle-check"></i>
      </span> */}
      <span className="TodoItem-p TodoItem-p--complete">{props.text}</span>
      <p className="Icon Icon-dellete">
        <i class="fa-sharp fa-solid fa-xmark"></i>
      </p>
    </li>
  );
}

export { TodoItem };
