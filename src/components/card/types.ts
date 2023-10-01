import { DomTypes } from "@dom-types"

type CardHeaderProps = {
  title?: string
  subtitle?: string
}

export type CardProps = {
  header: CardHeaderProps
}

export type CardTypes = DomTypes & {
  children: React.ReactNode
  card?: CardProps
}
