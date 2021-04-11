import React from "react";
import styled from "styled-components";

export const Input = ({ inputVal, speechedTodo, updateTodo, isOn }) => {
  return (
    <Wrapper
      onChange={updateTodo}
      value={isOn ? speechedTodo : inputVal}
      type="text"
      placeholder={isOn ? "할 일을 말해주세요" : "할 일을 입력해주세요"}
    />
  );
};

const Wrapper = styled.input`
  width: 80%;
  padding: 10px 20px;
  margin-bottom: 7px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;
