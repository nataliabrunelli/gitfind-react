import { ProfileContainer } from "./styles"

export const Profile = ({ avatar, name, user, bio }) => {
  return (
    <ProfileContainer>
      <img src={avatar} alt="" />
      <div>
        <h2>{ name }</h2>
        <h3>@{ user }</h3>
        <p>{ bio }</p>
      </div>
    </ProfileContainer>
  )
}