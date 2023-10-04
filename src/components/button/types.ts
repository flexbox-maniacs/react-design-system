import { DomTypes } from "@dom-types"

export type ButtonProps = {
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  size?: "small" | "large"
  style?: "outlined" | "fill" | "transparent"
  submit?: boolean
  variant?: "primary"
}

export type ButtonTypes = DomTypes & {
  button: ButtonProps
  handleClick?: React.MouseEventHandler
}
