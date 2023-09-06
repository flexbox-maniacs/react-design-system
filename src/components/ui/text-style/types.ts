import { ComponentTypes } from "@component"

export type TextStyleProps = {
  bold?: boolean
  uppercase?: boolean
  muted?: boolean
}

export type TextStyleTypes = ComponentTypes & {
  style: TextStyleProps
  children: React.ReactNode
}
