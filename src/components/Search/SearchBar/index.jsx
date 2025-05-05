import { SearchBarContainer } from "./styles";

export const SearchBar = ({ user, setUser, handleClick }) => {
  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      />
      <button onClick={() => handleClick()}>Buscar</button>
    </SearchBarContainer>
  );
};
