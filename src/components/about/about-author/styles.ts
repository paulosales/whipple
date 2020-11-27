import styled from "styled-components"

export const AuthorPhoto = styled.img`
  border-radius: 50%;
  width: 120px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
`

export const AuthorData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AuthorContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const AuthorContact = styled.div`
  display: flex;

  padding: 5px;

  svg {
    padding-right: 15px;
  }

  a {
    color: var(--white);
    text-decoration: none;
  }
`
