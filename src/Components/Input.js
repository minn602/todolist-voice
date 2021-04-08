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
  padding: 10px;
  margin-bottom: 7px;
`;
