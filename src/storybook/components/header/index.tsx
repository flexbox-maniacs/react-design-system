import { useEffect, useState } from "react"
import { changeTheme, getBrowserTheme } from "@scripts"
import { Button } from "@ds"
import { StorybookHeaderTypes } from "./types"
import "./style.scss"
import StorybookLogo from "@images/storybook.svg"

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
    <header id="storybook-header">
      <img src={StorybookLogo} alt="storybook logo" id="storybook-header-logo" />
      <Button button={{ icon: icon, size: "small", variant: "transparent" }} handleClick={themeHandler} />
    </header>
  )
}

export default StorybookHeader
