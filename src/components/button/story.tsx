import Button from "."
import { ButtonProps } from "./types"

function ButtonStory(defaultProps: ButtonProps): JSX.Element {
  return <Button button={defaultProps} />
}

export const defaults = {
  label: "button",
  style: "outlined",
} as ButtonProps

export default ButtonStory
