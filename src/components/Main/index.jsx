import { MainContainer } from "./styles";
import { Search } from "../Search";
import { Logo } from "./Logo";

export const Main = () => {
  return (
    <MainContainer>
      <Logo />
      <Search />
    </MainContainer>
  )
}