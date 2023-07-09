import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([
    { id: nanoid(), todo: "리액트 공부하기" },
    { id: nanoid(), todo: "아침 운동하기" },
  ]);
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          return setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // 버튼 클릭 시 화면에 입력한 값 보여주기
          setTodos([...todos, { id: nanoid(), todo: newTodo }]);
          // 입력 후 입력 필드 초기화
          setNewTodo("");
        }}
      >
        추가하기
      </button>

      {/* 현재 투두리스트 화면에 그리기 = map함수 이용 */}
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.todo}</div>
            <button
              onClick={() => {
                // 삭제된 후 남은 데이터들을 새 변수에 할당하기
                const filterData = todos.filter((item) => {
                  // 내가 클릭한 카드의 id값 비교
                  return item.id !== todo.id;
                });
                setTodos(filterData);
              }}
            >
              삭제하기
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
