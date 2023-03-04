import { useClassName } from "@scripts"
import { TextStyleTypes } from "./types"
import "./style.scss"

function UiTextStyle({ style, children }: TextStyleTypes): JSX.Element {
  const textStyleClassList = {
    uppercase: "uppercase",
    bold: "bold",
  }

  const textStyleClass = useClassName(["text-style"], style, textStyleClassList)

  return <span className={textStyleClass}>{children}</span>
}

export default UiTextStyle
