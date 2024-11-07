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
  padding: 0 15px;

  @media screen and (min-width: 786px) {
    padding: 0 30px;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  height: 50px;
  border: none;
  border-radius: 40px;
  background-color: hotpink;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;
