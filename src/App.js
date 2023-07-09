import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([
    { id: nanoid(), todo: "리액트 복습하기", like: 0 },
    { id: nanoid(), todo: "호빵이 놀아주기", like: 0 },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [likeNum, setLikeNum] = useState(0);

  return (
    <div>
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
          setTodos([...todos, { id: nanoid(), todo: newTodo, like: 0 }]);
          // 입력 후 입력 필드 초기화
          setNewTodo("");
        }}
      >
        저장하기
      </button>
      <div>
        {/* 현재 투두리스트 화면에 그리기 = map함수 이용 */}
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.todo}</div>
              <div>🖤 {likeNum}</div>
              <button
                onClick={() => {
                  // 삭제된 후 남은 데이터들을 새 변수에 할당하기
                  const filterData = todos.filter((item) => {
                    // 내가 클릭한 것의 id와 비교
                    return item.id !== todo.id;
                  });
                  setTodos(filterData);
                }}
              >
                삭제하기
              </button>
              {/* ------------ 좋아요 기능 ------------ */}
              <button
                onClick={() => {
                  // 좋아요 버튼을 누르면 like 숫자 올라가도록
                  const likeCount = likeNum + 1;
                  setLikeNum(likeCount);
                }}
              >
                좋아요
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
