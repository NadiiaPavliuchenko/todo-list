import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins-Regular", sans-serif;

  width: 30px;
  height: 30px;

  border: 1px solid black;
  border-radius: 50px;
  background-color: transparent;

  color: #383838;
  transition: color, border-color, ease-in-out, 200ms;

  &:hover,
  :focus {
    color: hotpink;
    border-color: hotpink;
  }
  &:active {
    color: hotpink;
    border-color: hotpink;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &[data-status="true"] {
    background-color: white;
    border-color: hotpink;
    color: hotpink;
  }
`;
