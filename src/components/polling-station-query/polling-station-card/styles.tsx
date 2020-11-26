import styled from "styled-components"
import { PollingStationCardIdProps } from "../../../types"
import { fadeInAnimation } from "../../animations"

export const PollingStationContainer = styled.div`
  background-color: var(--theme-color-04-bg);
  color: var(--theme-color-04-fg);
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  margin-bottom: 10px;
  padding: 5px;
  animation-name: ${fadeInAnimation};
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
`

export const PollingStationId = styled.div<PollingStationCardIdProps>`
  display: flex;
  font-size: 2rem;
  font-weight: ${(props) => (props.changed ? 400 : 700)};
  justify-content: space-around;
  text-decoration: ${(props) => (props.changed ? "line-through" : "none")};
`

export const Place = styled.div`
  font-weight: 700;
  text-align: center;
`

export const Address = styled.div`
  text-align: center;
`
