import { FormCheckboxTypes } from "./types"
import "./style.scss"

function FormCheckbox({ checkbox }: FormCheckboxTypes): JSX.Element {
  return (
    <label htmlFor={checkbox.name} className="checkbox-wrapper">
      <input type="checkbox" name={checkbox.name} defaultChecked={checkbox.defaultChecked} className="checkbox" />
      <span className="checkbox-check" />
    </label>
  )
}

export default FormCheckbox
