import { DomTypes } from "@dom-types"
import { InputTypes } from "../form/input-types"

export type ButtonProps = {
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  size?: "small" | "large"
  style?: "outlined" | "fill" | "transparent"
  submit?: boolean
  variant?: "primary" | "info" | "warning" | "success" | "danger"
}

export type ButtonTypes = DomTypes &
  InputTypes & {
    button: ButtonProps
  }
