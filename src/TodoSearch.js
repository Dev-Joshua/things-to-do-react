import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
    >
      <input
        style={{
          height: "25px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "6px 6px 8px 3px #EBB5A3",
          padding: "5px 10px",
          fontSize: "12px",
          width: "100%",
        }}
        value={searchValue}
        type="text"
        placeholder="Enter a task"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <i
          style={{ position: "relative", right: "30px" }}
          className="fa-solid fa-magnifying-glass"
        ></i>
      </div>
    </div>
  );
}

export { TodoSearch };
