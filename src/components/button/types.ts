import { DomTypes } from "../../types/dom-types"
import { InputTypes } from "../form/input-types"
import { DefaultSizes, DefaultVariants } from "../../types/default-types"

type ButtonProps = {
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  size?: DefaultSizes
  style?: "filled" | "outlined" | "transparent"
  submit?: boolean
  variant?: DefaultVariants
}

type ButtonTypes = DomTypes &
  InputTypes & {
    button: ButtonProps
  }

export { type ButtonTypes, type ButtonProps }
