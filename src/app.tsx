import React from "react"
import ReactDOM from "react-dom/client"
import Storybook from "./storybook/storybook"
import "@theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Storybook />
  </React.StrictMode>
)
