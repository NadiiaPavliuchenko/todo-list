import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  border: none;
  border-radius: 40px;
  padding: 1px;

  background-color: white;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const StyledInput = styled.input`
  font-family: "Poppins-Reguar", sans-serif;
  padding: 0 15px;

  @media screen and (min-width: 786px) {
    padding: 0 30px;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  font-family: "Poppins-Regular", sans-serif;

  height: 50px;
  border: none;
  border-radius: 40px;
  background-color: hotpink;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }

  transition: background-color, ease-in-out, 200ms;

  &:hover,
  :focus {
    background-color: #f00e7f;
  }
  &:active {
    background-color: #f00e7f;
  }
`;
