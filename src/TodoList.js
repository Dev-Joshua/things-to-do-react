function TodoList(props) {
  return (
    <ul style={{ "list-style": "none", padding: "0" }}>{props.children}</ul>
  );
}

export { TodoList };
