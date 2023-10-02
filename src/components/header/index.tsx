import { useEffect, useState, useRef } from "react"
import { changeTheme, getBrowserTheme } from "@scripts"
import { Button } from "@ds"
import { HeaderTypes } from "./types"
import "./style.scss"

function Header({ header, headerHeight }: HeaderTypes): JSX.Element {
  const [icon, setIcon] = useState("")

  function themeHandler() {
    changeTheme
    setIcon(changeTheme().icon)
  }
  const headerRef = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    getBrowserTheme
    setIcon(getBrowserTheme().icon)

    setTimeout(() => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        headerHeight(height)
      }
    }, 500)
  }, [headerHeight])

  return (
    <header className="header" ref={headerRef}>
      <img src={header.logo} alt="logo" className="header-logo" />
      <Button button={{ icon: icon, size: "small", variant: "transparent" }} handleClick={themeHandler} />
    </header>
  )
}

export default Header
