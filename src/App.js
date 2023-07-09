import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      todo: "리액트 복습하기",
      like: 0,
    },
    {
      id: nanoid(),
      todo: "호빵이 놀아주기",
      like: 0,
    },
  ]);

  // 저장하기 버튼 클릭 - 새로운 Todo 추가
  const addBtnHandler = () => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        todo: newTodo,
        like: 0,
      },
    ]);
    // 입력 후 입력 필드 초기화
    setNewTodo("");
  };

  // 좋아요 버튼 클릭 - 해당 카드의 like 값이 증가하는 함수
  const likeBtnHandler = (id) => {
    const updateLikeNumber = todos.map((item) => {
      return item.id === id ? { ...item, like: item.like + 1 } : item;
    });
    setTodos(updateLikeNumber);
  };

  const deleteBtnHandler = (id) => {
    // 삭제된 후 남은 데이터들을 새 변수에 할당하기
    const filterData = todos.filter((todo) => todo.id !== id);
    setTodos(filterData);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          return setNewTodo(e.target.value);
        }}
      />
      <button onClick={addBtnHandler}>추가</button>
      <div>
        {/* 현재 투두리스트 화면에 그리기 = map함수 이용 */}
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.todo}</div>
              <div>🖤 {todo.like}</div>
              <button onClick={() => deleteBtnHandler(todo.id)}>
                삭제하기
              </button>
              <button onClick={() => likeBtnHandler(todo.id)}>좋아요</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
