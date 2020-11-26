import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSync } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { DatabaseState } from "../types"
import {
  AppContainer,
  Header,
  HeaderTitle,
  Loading,
  LoadingIcon,
  LoadingMessage,
  HeaderTop,
} from "./styles"
import MenuButton from "./menu-button"
import Menu from "./menu"
import PollingStatinoQuery from "./polling-station-query"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import AboutWhipper from "./about/about-whipple"
import AboutAuthor from "./about/about-author"

const App: React.FC = () => {
  const database = useSelector(
    (state: RootState): DatabaseState => state.database
  )

  return (
    <AppContainer>
      <Router>
        <Header>
          <HeaderTop>
            <HeaderTitle>Whipple</HeaderTitle>
            <MenuButton />
          </HeaderTop>
          <Menu />
        </Header>
        <Switch>
          <Route exact path="/">
            <PollingStatinoQuery />
          </Route>
          <Route path="/about-whipple">
            <AboutWhipper />
          </Route>
          <Route path="/about-author">
            <AboutAuthor />
          </Route>
        </Switch>
      </Router>
      <Loading visible={database.loading}>
        <LoadingIcon>
          <FontAwesomeIcon icon={faSync} spin />
        </LoadingIcon>
        <LoadingMessage>
          Aguarde 1 ou 2 minutos enquanto a carga do banco de dados off-line é
          realizada.
        </LoadingMessage>
      </Loading>
    </AppContainer>
  )
}

export default App
