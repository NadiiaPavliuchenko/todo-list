import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  @media screen and (min-width: 786px) {
    width: 600px;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  background-color: white;
  height: 50px;
  padding: 0 10px;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 786px) {
    padding: 0 20px;
  }
`;

export const StyledInput = styled.input`
  font-family: "Poppins", sans-serif;

  width: 100%;
  width: 210px;
  padding: 5px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  &:focus {
    outline: 1px solid hotpink;
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  color: #383838;
  transition: color, ease-in-out, 200ms;

  &:hover,
  :focus {
    color: hotpink;
  }
`;
