import { InputTypes } from "../input-types"

type FormCheckboxProps = {
  name: string
  defaultChecked?: boolean
}

export type FormCheckboxTypes = InputTypes & {
  checkbox: FormCheckboxProps
}
