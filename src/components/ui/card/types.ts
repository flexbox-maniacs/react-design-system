import { ComponentTypes } from "@component"

type CardHeaderProps = {
  title?: string
  subtitle?: string
}

export type CardProps = {
  header: CardHeaderProps
}

export type CardTypes = ComponentTypes & {
  children: React.ReactNode
  card?: CardProps
}
