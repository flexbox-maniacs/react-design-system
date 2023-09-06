import { useClassName } from "@scripts"
import { TextStyleTypes } from "./types"
import "./style.scss"

function UiTextStyle({ style, className, children }: TextStyleTypes): JSX.Element {
  const textStyleClassList = {
    uppercase: "uppercase",
    bold: "bold",
    muted: "muted",
  }

  const textStyleClass = useClassName([className ?? null, "text-style"], style, textStyleClassList)

  return <span className={textStyleClass}>{children}</span>
}

export default UiTextStyle
