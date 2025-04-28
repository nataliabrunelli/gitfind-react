import styled from "styled-components";

export const SearchBarContainer = styled.section`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  gap: 1rem;

  input {
    width: 100%;
    background-color: transparent;
    color: #ffffff;
    padding: 0.5rem 1.5rem;
    border: 1px solid #999999;
    border-radius: 1rem;
  }

  button {
    padding: 0 3rem;
    background-color: #2d333b;
    color: #999999;
    border: 1px solid #999999;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      border: 1px solid #FFFFFF;
    }
  }
`;
