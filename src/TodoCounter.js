function TodoCounter({ total, completed }) {
  return (
    <p style={{ textAlign: "center" }}>
      Has completado {completed} de {total} TODOS
    </p>
  );
}

export { TodoCounter };
