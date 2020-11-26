import styled from "styled-components"
import { fadeInAnimation } from "../../animations"

export const PollingStationQueryForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;
  width: 310px;
  animation-name: ${fadeInAnimation};
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
`

export const PollingStationInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  width: 120px;
  border-radius: 10px;
  border-width: 0;
  padding: 5px;
  text-align: right;
  background-color: var(--theme-color-03-bg);
  color: var(--theme-color-03-fg);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: all 300ms ease-in-out;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
    background-color: var(--white);
    box-shadow: 0 2px 3px 0 rgba(60, 64, 67, 0.302),
      0 2px 4px 2px rgba(60, 64, 67, 0.149);
  }
`

export const QueryButton = styled.button`
  font-size: 2rem;
  border-radius: 10px;
  border-width: 0px;
  padding: 5px;
  text-transform: uppercase;
  background-color: var(--theme-color-02-bg);
  color: var(--theme-color-02-fg);
  &:focus {
    outline: none;
  }
`
