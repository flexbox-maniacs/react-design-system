import { useClassName } from "@scripts"
import { IconTypes } from "./types"
import "./style.scss"

function UiIcon({ icon }: IconTypes): JSX.Element {
  const { type = "outlined" } = icon

  const iconClass = useClassName(["icon", `material-icons-${type}`])

  return <i className={iconClass}>{icon.name}</i>
}

export default UiIcon
