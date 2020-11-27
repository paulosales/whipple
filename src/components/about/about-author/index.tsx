import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { AboutContainer } from "../styles"
import {
  AuthorData,
  AuthorContacts,
  AuthorContact,
  AuthorPhoto,
} from "./styles"

const AboutAuthor: React.FC = () => {
  return (
    <AboutContainer>
      <h2>Sobre o autor</h2>

      <AuthorData>
        <AuthorPhoto src="autor.jpg" />
        <h3>Paulo Rogério Sales Santos</h3>
      </AuthorData>
      <AuthorContacts>
        <AuthorContact>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:paulosales@gmail.com">paulosales@gmail.com</a>
        </AuthorContact>
        <AuthorContact>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:85996207481">(85) 99620.7481</a>
        </AuthorContact>
        <AuthorContact>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/paulosales">@paulosales</a>
        </AuthorContact>
        <AuthorContact>
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/paulosales1/">@paulosales1</a>
        </AuthorContact>
      </AuthorContacts>
    </AboutContainer>
  )
}

export default AboutAuthor
