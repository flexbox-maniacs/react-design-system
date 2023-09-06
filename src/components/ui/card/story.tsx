import UiCard from "."
import { CardProps } from "./types"

function CardStory(defaultProps: CardProps): JSX.Element {
  return <UiCard card={defaultProps}>content</UiCard>
}

export const defaults = {
  header: {
    title: "title",
    subtitle: "subtitle",
  },
} as CardProps

export default CardStory
