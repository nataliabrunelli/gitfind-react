import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Roboto", sans-serif;
}

#root {
  width: 100%;
  min-height: 100vh;
  background-color: #102128;
}

p {
  font-size: .85rem;
}
`