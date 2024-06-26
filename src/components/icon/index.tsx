import { useClassName } from "@scripts"
import { IconProps, IconTypes } from "./types"
import "./style.scss"

function Icon({ icon }: IconTypes): JSX.Element {
  const { type = "outlined" }: IconProps = icon

  const iconClass = useClassName(["icon", `material-icons-${type}`])

  return <i className={iconClass}>{icon.name}</i>
}

export default Icon
