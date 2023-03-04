import { ReactNode } from "react"

type TextStyleProps = {
  bold?: boolean
  uppercase?: boolean
}

export type TextStyleTypes = {
  style: TextStyleProps
  children: ReactNode
}
