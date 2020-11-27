import React from "react"
import { AboutContainer } from "../styles"
import { WhippleData, WhippleLogo } from "./styles"

const AboutAuthor: React.FC = () => {
  return (
    <AboutContainer>
      <h2>Sobre o Whipple</h2>
      <WhippleData>
        <WhippleLogo src="logo144.png" />
        <h3>Whipple</h3>
        <div>
          WebApp de consulta rápida off-line de seções eleitorais de Estado do
          Ceará.
        </div>
      </WhippleData>
      <h3>
        Licença: <a href="https://opensource.org/licenses/MIT">MIT</a>
      </h3>
      <h3>
        Repositório:{" "}
        <a href="https://github.com/paulosales/whipple">whipple at Github</a>
      </h3>
      <h3>Características</h3>
      <ol>
        <li>Whipple funciona off-line.</li>
        <li>
          Whipple identifica as seções rezoneadas em 2018:
          <ul>
            <li>
              Em 2018, algumas seções foram rezoneadas. Ou seja, trocaram de
              número de zona e de seção;
            </li>
            <li>
              Exemplo: A seção 719 da zona 94 virou a seção 125 da zona 85;
            </li>
            <li>
              Ao pesquisar pela seção 719 da zona 94, ela aparecerá com riscada
              e logo abaixo o número da nova seção.
            </li>
          </ul>
        </li>
        <li>
          Whipple identifica as seções distribuídas:
          <ul>
            <li>
              Algumas seções foram extintas e os eleitores distribuídos em
              outras seções;
            </li>
            <li>
              Exemplo: A seção 289 da zona 85 foi distribuída para as seções
              286, 287, 288, 290, 291 e 292 da mesma zona;
            </li>
            <li>
              Ao pesquisar pela seção 289 da zona 85, ela aparecerá riscada e
              logo abaixo a lista com as 6 seções;
            </li>
            <li>
              Nesta situação, o WebApp não tem como identificar a seção exata
              onde o eleitor irá votar, pois o DE-PARA do número do título para
              a seção não é uma informação pública.
            </li>
          </ul>
        </li>
        <li>Os dados usados no Whipple são públicos</li>
      </ol>
      Copyright (c) 2020 Paulo Rogério Sales Santos
    </AboutContainer>
  )
}

export default AboutAuthor
