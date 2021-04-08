import React from "react";
import styled from "styled-components";

export const Buttons = ({ addTodo, isOn, startRecognizer, endRecognizer }) => {
  return (
    <Wrapper>
      <MicButton onClick={startRecognizer} isOn={isOn} type="button">
        <img
          alt="mic"
          src={isOn ? "./images/mic-on.png" : "./images/mic.png"}
        />
      </MicButton>
      <SubmitButton onClick={addTodo} type="submit">
        Add
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MicButton = styled.button`
  padding: 3px 5px;
  margin-right: 7px;
  background-color: ${(props) => (props.isOn ? "palevioletred" : "#fff")};
  border: 2px solid palevioletred;
  border-radius: 4px;

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
