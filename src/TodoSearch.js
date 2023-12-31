import React from "react";

function TodoSearch(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "25px" }}>
      <input
        style={{
          height: "25px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "6px 6px 8px 3px #EBB5A3",
          padding: "5px 10px",
          fontSize: "12px",
          width: "50%",
        }}
        value={props.searchValue}
        type="text"
        placeholder="Enter a task"
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
