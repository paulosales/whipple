import React from "react"
import { Link } from "react-router-dom"
import { AboutContainer, CloseButton } from "../styles"

const AboutAuthor: React.FC = () => {
  return (
    <AboutContainer>
      <h3>Whipper</h3>
      <Link to="/">
        <CloseButton>Fechar</CloseButton>
      </Link>
    </AboutContainer>
  )
}

export default AboutAuthor
