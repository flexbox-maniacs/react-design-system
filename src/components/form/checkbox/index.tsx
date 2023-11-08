import { FormCheckboxTypes } from "./types"
import "./style.scss"

function FormCheckbox({ name }: FormCheckboxTypes): JSX.Element {
  return (
    <label htmlFor={name} className="checkbox-wrapper">
      <input type="checkbox" name={name} className="checkbox" />
      <span className="checkbox-check" />
    </label>
  )
}

export default FormCheckbox
