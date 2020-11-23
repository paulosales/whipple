import styled from "styled-components"

export const PollingStationQueryForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;
  width: 310px;
`

export const PollingStationInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  width: 140px;
  border-radius: 10px;
  border-width: 0;
  padding: 5px;
  text-align: right;
  background-color: var(--theme-color-03-bg);
  color: var(--theme-color-03-fg);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
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
  }
`

export const QueryButton = styled.button`
  margin-top: 5px;
  font-size: 2rem;
  border-radius: 10px;
  width: 305px;
  text-transform: uppercase;
  background-color: var(--theme-color-02-bg);
  color: var(--theme-color-02-fg);
  &:focus {
    outline: none;
  }
`
