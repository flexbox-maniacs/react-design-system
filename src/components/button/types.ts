import { DomTypes } from "../../types/dom-types"
import { InputTypes } from "../form/input-types"
import { DefaultVariants } from "../../types/variants"

type ButtonProps = {
  label?: string
  startingIcon?: string
  icon?: string
  endingIcon?: string
  size?: DefaultSize
  style?: "filled" | "outlined" | "transparent"
  submit?: boolean
  variant?: DefaultVariants
}

type ButtonTypes = DomTypes &
  InputTypes & {
    button: ButtonProps
  }

export { type ButtonTypes, type ButtonProps }
