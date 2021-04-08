import React from "react";
import styled from "styled-components";

export const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <Wrapper key={todo.id}>
            <input type="checkbox" defaultChecked={todo.checked} />
            <Content checked={todo.checked}>{todo.content}</Content>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.p`
  text-decoration-line: ${(props) => (props.checked ? "line-through" : "none")};
`;
