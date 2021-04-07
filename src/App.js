import React, { useState } from "react";
import { useRecognizer } from "./Hooks/useRecognizer";
import styled from "styled-components";
import { Input } from "./Components/Input";
import { Buttons } from "./Components/Buttons";
import { TodoList } from "./Components/TodoList";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [
    speechedTodo,
    order,
    isOn,
    startRecognizer,
    endRecognizer,
  ] = useRecognizer();

  const updateTodo = (evt) => {
    setInputVal(evt.target.value);
  };

  const addTodo = () => {
    if (inputVal) {
      setTodos((prev) => [
        ...prev,
        {
          id: todos.length + 1,
          content: inputVal,
          checked: false,
        },
      ]);
      setInputVal("");
    }
  };

  // if (text) {
  //   console.log("okay?");
  //   setTodos((prev) => [
  //     ...prev,
  //     {
  //       id: todos.length + 1,
  //       content: text,
  //       checked: false,
  //     },
  //   ]);
  // }
  if (order === "추가") {
    console.log("추가됨");
    setTodos((prev) => [
      ...prev,
      {
        id: todos.length + 1,
        content: speechedTodo,
        checked: false,
      },
    ]);
    setInputVal("");
  }

  return (
    <Wrapper>
      <h1>💜To do list💜</h1>
      <Input
        inputVal={inputVal}
        speechedTodo={speechedTodo}
        isOn={isOn}
        updateTodo={updateTodo}
      />
      <Buttons
        addTodo={addTodo}
        isOn={isOn}
        startRecognizer={startRecognizer}
        endRecognizer={endRecognizer}
      />
      <TodoList todos={todos} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  h1 {
    color: palevioletred;
  }

  width: 400px;
  min-height: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid palevioletred;
  border-radius: 16px;
`;
