import React from "react";
import styled from "styled-components";

export const Buttons = ({ addTodo, isOn, startRecognizer, endRecognizer }) => {
  return (
    <Wrapper>
      <MicButton onClick={() => startRecognizer()} isOn={isOn} type="button">
        <img
          alt="mic"
          src={isOn ? "./images/mic-on.png" : "./images/mic.png"}
        />
      </MicButton>
      <SubmitButton onClick={() => addTodo()} type="submit">
        Add
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MicButton = styled.button`
  width: 50px;
  height: 30px;
  padding: 5px 10px;
  margin-right: 7px;
  background: ${(props) =>
    props.isOn ? "#DF88A5" : "rgba(255, 255, 255, 0.7)"};
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SubmitButton = styled(MicButton)`
  color: palevioletred;
  font-weight: 700;
`;
