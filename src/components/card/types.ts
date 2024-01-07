import { DomTypes } from "@dom-types"

type CardHeaderProps = {
  title?: string
  subtitle?: string
  note?: string
}

type CardProps = {
  header: CardHeaderProps
}

type CardTypes = DomTypes & {
  children: React.ReactNode
  card?: CardProps
}

export { type CardTypes, type CardProps }
