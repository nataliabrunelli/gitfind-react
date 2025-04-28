import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 100vw;
  min-height: calc(100vh - 58px);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  aside {
    height: 100%;
    position: relative;

    img {
      height: 100%;
      opacity: 0.125;
      position: absolute;
      left: -55%;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;
