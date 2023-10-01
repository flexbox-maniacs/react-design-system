import Card from "."
import { CardProps } from "./types"

function CardStory(defaultProps: CardProps): JSX.Element {
  return <Card card={defaultProps}>content</Card>
}

export const defaults = {
  header: {
    title: "title",
    subtitle: "subtitle",
  },
} as CardProps

export default CardStory
