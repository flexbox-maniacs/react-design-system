type InputSelectTypes = {
  name: string
  options: Array<string>
}

export type InputProps = {
  name?: string
  defaultValue?: string
  type?: React.HTMLInputTypeAttribute | "select"
  select?: InputSelectTypes
}

export type InputTypes = {
  input: InputProps
}
