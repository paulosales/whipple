import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSync } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { DatabaseState } from "../types"
import PollingStationQueryParameters from "./polling-station-query-parameters"
import PollingStationQueryResult from "./polling-station-query-result"
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

const App: React.FC = () => {
  const database = useSelector(
    (state: RootState): DatabaseState => state.database
  )

  return (
    <AppContainer>
      <Header>
        <HeaderTop>
          <HeaderTitle>Whipple</HeaderTitle>
          <MenuButton />
        </HeaderTop>
        <Menu/>
      </Header>
      <PollingStationQueryParameters />
      <PollingStationQueryResult />
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
