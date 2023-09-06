import UiTextStyle from "."
import { TextStyleProps } from "./types"

function TextStyleStory(defaultProps: TextStyleProps): JSX.Element {
  return <UiTextStyle style={defaultProps}>text</UiTextStyle>
}

export const defaults = {
  bold: true,
} as TextStyleProps

export default TextStyleStory
