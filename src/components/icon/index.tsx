import { useClassName } from "@scripts"
import { IconTypes, IconProps } from "./types"
import "./style.scss"

const iconDefault: IconProps = {
  type: "outlined",
  name: "face",
}

function Icon({ icon = iconDefault }: IconTypes): JSX.Element {
  const iconClass = useClassName(["icon", `material-icons-${icon.type}`])

  return <i className={iconClass}>{icon.name}</i>
}

export default Icon
