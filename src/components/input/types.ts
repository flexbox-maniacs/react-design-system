import { DomTypes } from "../../types/dom-types"

type InputSelectTypes = {
  name: string
  options: Array<string>
}

export type InputProps = {
  name?: string
  defaultValue?: string
  type?: React.HTMLInputTypeAttribute | "select" | "switch"
  select?: InputSelectTypes
  placeholder?: string
}

export type InputTypes = DomTypes & {
  input: InputProps
}
