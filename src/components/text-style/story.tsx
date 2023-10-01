import TextStyle from "."
import { TextStyleProps } from "./types"

function TextStyleStory(defaultProps: TextStyleProps): JSX.Element {
  return <TextStyle style={defaultProps}>text</TextStyle>
}

export const defaults = {
  bold: true,
} as TextStyleProps

export default TextStyleStory
