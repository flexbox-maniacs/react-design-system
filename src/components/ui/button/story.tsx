import UiButton from "."
import { ButtonProps } from "./types"

function ButtonStory(defaultProps: ButtonProps): JSX.Element {
  return (
    <>
      <UiButton button={defaultProps} />
    </>
  )
}

export const defaults = {
  label: "button",
  type: "outlined",
} as ButtonProps

export default ButtonStory
