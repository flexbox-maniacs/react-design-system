import React from "react"

export type ButtonProps = {
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  variant?: "primary" | "transparent"
  type?: "outlined" | "fill"
  size?: "small" | "large"
}

export type ButtonTypes = {
  button: ButtonProps
  handleClick?: React.MouseEventHandler
}
