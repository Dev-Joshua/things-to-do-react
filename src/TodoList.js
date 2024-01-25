function TodoList(props) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0",
        display: "grid",
        justifyItems: "center",
      }}
    >
      {props.children}
    </ul>
  );
}

export { TodoList };
