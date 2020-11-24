import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import "./index.css"
import App from "./components/App"
import { store } from "./redux/store"
import { createGlobalStyle } from "styled-components"
import { mountLocalDatabase } from "./database"
import debug from "debug"
import register from "./service-worker-register"

const log = debug("whipple:index:log")
const error = debug("whipple:index")

debug.enable("whipple:*")

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000;
    --white: #fff;
    --theme-color-01-bg: #4d9de0ff;
    --theme-color-01-fg: var(--white);
    --theme-color-02-bg: #e15554ff;
    --theme-color-02-fg: var(--white);
    --theme-color-03-bg: #e1bc29ff;
    --theme-color-03-fg: var(--black);
    --theme-color-04-bg: #3bb273ff;
    --theme-color-04-fg: var(--white);
    --theme-color-05-bg: #7768aeff;
    --theme-color-05-fg: var(--white);
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  body {
    background-color: var(--theme-color-01-bg);
    color: var(--theme-color-01-fg);
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

mountLocalDatabase()
  .then(() => {
    log("Local database sucessfully mounted.")
  })
  .catch((e) => {
    error("Local database mounting error " + e.message)
  })

register()
