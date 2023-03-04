import { changeTheme, getBrowserTheme } from "@scripts"
import { UiButton, UiIcon } from "@ui"
import { StorybookHeaderTypes } from "./types"
import "./style.scss"
import StorybookLogo from "@public/storybook.svg"
import { useEffect, useState } from "react"

function StorybookHeader({}: StorybookHeaderTypes): JSX.Element {
  const [icon, setIcon] = useState("")

  function themeHandler() {
    changeTheme
    setIcon(changeTheme().icon)
  }

  useEffect(() => {
    getBrowserTheme
    setIcon(getBrowserTheme().icon)
  })

  return (
    <header className="storybook-header">
      <img
        src={StorybookLogo}
        alt="storybook logo"
        className="storybook-header-logo"
      />
      <UiButton
        button={{ icon: icon, size: "small" }}
        handleClick={themeHandler}
      />
    </header>
  )
}

export default StorybookHeader
