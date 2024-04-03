import { InputTypes } from "../form/input-types"
import { DefaultSizes, DefaultVariants } from "../../types/default-types"

type ButtonProps = {
  endingIcon?: string
  icon?: string
  label?: string
  size?: DefaultSizes
  startingIcon?: string
  style?: "filled" | "outlined" | "transparent"
  submit?: boolean
  variant?: DefaultVariants
}

type ButtonTypes = InputTypes & {
  button: ButtonProps
}

export { type ButtonTypes, type ButtonProps }
