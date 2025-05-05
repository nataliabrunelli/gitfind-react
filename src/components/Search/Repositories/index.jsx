import { RepositoriesContainer } from "./styles";

export const Repositories = ({ user, repos }) => {
  return (
    <RepositoriesContainer>
      <h1>Repositórios</h1>
      <ul>
        {repos.slice(0,3).map((repo, index) => (
          <li key={index}>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            <p>{repo.description?? "Repositório sem descrição"}</p>
          </li>
        ))}
      </ul>
      <a href={`https://github.com/${user}?tab=repositories`} target="_blanck">Todos os repositórios</a>
    </RepositoriesContainer>
  );
};
