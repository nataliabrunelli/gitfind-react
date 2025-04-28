import { RepositoriesContainer } from "./styles";

export const Repositories = ({ repos }) => {
  return (
    <RepositoriesContainer>
      <h1>Repositórios</h1>
      <ul>
        {repos.slice(0,3).map((repo, index) => (
          <li key={index}>
            <a href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </RepositoriesContainer>
  );
};
