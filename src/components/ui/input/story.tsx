import UiInput from "."
import { InputProps } from "./types"

function InputStory(defaultProps: InputProps): JSX.Element {
  return <UiInput input={defaultProps} />
}

export const defaults = {} as InputProps

export default InputStory
