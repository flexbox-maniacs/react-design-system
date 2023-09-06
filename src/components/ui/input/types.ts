import { ComponentTypes } from "@component"

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

export type InputTypes = ComponentTypes & {
  input: InputProps
}
