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
          borderRadius: "30px",
          boxShadow: "6px 6px 8px 3px #EBB5A3",
          padding: "5px 12px",
          fontSize: "15px",
          width: "50%",
          fontFamily: "Concert One",
          marginLeft: "14px",
          outlineColor: "#508787",
        }}
        value={searchValue}
        type="text"
        placeholder="Search a task"
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
