import Input from "."
import { InputProps } from "./types"

function InputStory(defaultProps: InputProps): JSX.Element {
  return <Input input={defaultProps} />
}

export const defaults = {} as InputProps

export default InputStory
