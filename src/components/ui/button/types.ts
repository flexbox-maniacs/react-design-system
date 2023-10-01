import { DomTypes } from "@dom-types"

export type ButtonProps = {
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  variant?: "primary" | "transparent"
  style?: "outlined" | "fill"
  size?: "small" | "large"
  submit?: boolean
}

export type ButtonTypes = DomTypes & {
  button: ButtonProps
  handleClick?: React.MouseEventHandler
}
