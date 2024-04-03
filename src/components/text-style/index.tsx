import { useClassName } from "@scripts"
import { TextStyleTypes } from "./types"
import "./style.scss"

function TextStyle({ style, children }: TextStyleTypes): JSX.Element {
  const textStyleClassList = {
    uppercase: "uppercase",
    bold: "bold",
    muted: "muted",
  }

  const textStyleClass = useClassName("text-style", textStyleClassList, style)

  return <span className={textStyleClass}>{children}</span>
}

export default TextStyle
