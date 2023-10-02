import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]); //未完了
  const [completeTodos, setCompleteTodos] = useState([]); //完了
  const [todoText, setTodoText] = useState(""); //入力ボックスに入力された値
  const onChangeTodoText = (event) => setTodoText(event.target.value); //入力ボックスに入力された値をtodoTextに設定

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodoList = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodoList);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
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
          {incompleteTodos.map((todo, index) => {
            //keyを設定しないと区別つかないだろ！！と怒られる
            return (
              <li key={todo}>
                <div className="list-row">
                  <span className="todo-content">{todo}</span>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <span className="todo-content">{todo}</span>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
