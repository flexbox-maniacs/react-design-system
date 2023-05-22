import UiIcon from "."
import { IconProps } from "./types"

function IconStory(defaultProps: IconProps): JSX.Element {
  return <UiIcon icon={defaultProps} />
}

export const defaults = {
  name: "home",
  type: "outlined",
} as IconProps

export default IconStory
