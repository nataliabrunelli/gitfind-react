import { useState } from "react";
import { Profile } from "./Profile";
import { Repositories } from "./Repositories";
import { SearchBar } from "./SearchBar";
import { SearchContainer } from "./styles";
import axios from "axios";

export const Search = () => {
  const [user, setUser] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [reposData, setReposData] = useState(null);

  async function handleClick() {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${user}`);
      setProfileData(userResponse.data);

      const reposResponse = await axios.get(`https://api.github.com/users/${user}/repos`);
      setReposData(reposResponse.data);

    } catch (error) {
      console.error('Erro na API:', error.response ? error.response.data : error.message);;
    }
  }

  console.log(profileData)

  return (
    <SearchContainer>
      <SearchBar user={user} setUser={setUser} handleClick={handleClick} />

      {profileData && (
        <Profile
          avatar={profileData.avatar_url}
          name={profileData.name ?? profileData.login}
          user={profileData.login}
          bio={profileData.bio ?? "Usuário sem bio"}
        />
      )}

      {reposData && <Repositories repos={reposData} user={user} />}
    </SearchContainer>
  );
};
