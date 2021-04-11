import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // if (!speechedTodo) {
    //   return;
    // }

    // if (speechedTodo === "") {
    //   return;
    // }

    if (order === "추가") {
      console.log("추가됨");
      if (speechedTodo) {
        setTodos((prev) => [
          ...prev,
          {
            id: todos.length + 1,
            content: speechedTodo,
            checked: false,
          },
        ]);
      }
    }
  }, [order]);

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

  return (
    <Wrapper>
      <h1>To do list</h1>
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
    color: #fff;
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
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
`;
