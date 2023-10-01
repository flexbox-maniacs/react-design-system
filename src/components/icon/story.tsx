import Icon from "."
import { IconProps } from "./types"

function IconStory(defaultProps: IconProps): JSX.Element {
  return <Icon icon={defaultProps} />
}

export const defaults = {
  name: "home",
  type: "outlined",
} as IconProps

export default IconStory
