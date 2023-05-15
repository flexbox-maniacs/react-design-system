type InputSelectTypes = {
  name: string
  options: Array<string>
}

type InputProps = {
  name?: string
  type?: React.HTMLInputTypeAttribute | "select"
  select?: InputSelectTypes
}

export type InputTypes = {
  input: InputProps
}
