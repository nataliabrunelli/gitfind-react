import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: #bbb9b9;
  /* width: 65%; */
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #E5E5E533;

  img {
    height: 100px;
    aspect-ratio: 1/1;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
  }

  div {
    

    h2,
    h3 {
      font-weight: 400;
    }

    h2 {
      font-size: 1.25rem;
      text-transform: capitalize;
    }

    h3 {
      font-size: .75rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: .85rem;
    }
  }
`;
