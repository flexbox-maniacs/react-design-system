type CardHeaderProps = {
  note?: string
  subtitle?: string
  title?: string
}

type CardProps = {
  header: CardHeaderProps
}

type CardTypes = {
  children: React.ReactNode
  card?: CardProps
}

export { type CardTypes, type CardProps }
