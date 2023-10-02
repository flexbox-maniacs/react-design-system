import { useEffect, useState } from "react"
import { changeTheme, getBrowserTheme } from "@scripts"
import { Button } from "@ds"
import { HeaderTypes } from "./types"
import "./style.scss"

function Header({ header }: HeaderTypes): JSX.Element {
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
    <header className="header">
      <img src={header.logo} alt="logo" className="header-logo" />
      <Button button={{ icon: icon, size: "small", variant: "transparent" }} handleClick={themeHandler} />
    </header>
  )
}

export default Header
