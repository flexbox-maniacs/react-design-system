import { DomTypes } from "../../types/dom-types"

export type TextStyleProps = {
  bold?: boolean
  uppercase?: boolean
  muted?: boolean
}

export type TextStyleTypes = DomTypes & {
  style: TextStyleProps
  children: React.ReactNode
}
