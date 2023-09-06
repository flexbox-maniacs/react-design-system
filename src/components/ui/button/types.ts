import { ComponentTypes } from "@component"

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

export type ButtonTypes = ComponentTypes & {
  button: ButtonProps
  handleClick?: React.MouseEventHandler
}
