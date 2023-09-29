import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]); //未完了
  const [completeTodos, setCompleteTodos] = useState(["ううう"]); //完了
  const [todoText, setTodoText] = useState(""); //入力ボックスに入力された値
  const onChangeTodoText = (event) => setTodoText(event.target.value); //入力ボックスに入力された値をtodoTextに設定

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodoList = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodoList);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            //keyを設定しないと区別つかないだろ！！と怒られる
            return (
              <li key={todo}>
                <div className="list-row">
                  <span className="todo-content">{todo}</span>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span className="todo-content">{todo}</span>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
