import React from "react";

const inputArea = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8pt",
};

export const InputTodo = (props) => {
  return (
    <div style={inputArea}>
      <input
        placeholder="TODOを入力"
        value={props.todoText}
        onChange={props.onChange}
      />
      <button onClick={props.onClick}>追加</button>
    </div>
  );
};
