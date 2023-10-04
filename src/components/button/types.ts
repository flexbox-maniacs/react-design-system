import { DomTypes } from "@dom-types"

export type ButtonProps = {
  style: "outlined" | "fill"
  variant: "primary" | "transparent"
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  size?: "small" | "large"
  submit?: boolean
}

export type ButtonTypes = DomTypes & {
  button: ButtonProps
  handleClick?: React.MouseEventHandler
}
