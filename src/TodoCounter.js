function TodoCounter({ total, completed }) {
  return (
    <p style={{ textAlign: "center" }}>
      Has completado <strong>{completed}</strong> de <strong>{total}</strong>{" "}
      TODOs
    </p>
  );
}

export { TodoCounter };
