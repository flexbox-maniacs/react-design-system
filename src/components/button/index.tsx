import { useClassName, useDefaults } from "@scripts"
import Icon from "../icon"
import { ButtonTypes, ButtonProps } from "./types"
import "./style.scss"

function Button({ button, onClick }: ButtonTypes): JSX.Element {
  button = useDefaults(button, { style: "filled", variant: "primary" } as ButtonProps)

  const buttonClassList = {
    size: `size-${button.size}`,
    style: `style-${button.style}`,
    variant: `variant-${button.variant}`,
  }

  const buttonClass = useClassName("button", buttonClassList, button)

  return (
    <button className={buttonClass} onClick={onClick} type={button.submit ? "submit" : undefined}>
      {(button.startingIcon || button.icon) && <Icon icon={{ name: (button.startingIcon ?? button.icon) as string }} />}
      {button.label && <span className="button-label">{button.label}</span>}
      {button.endingIcon && <Icon icon={{ name: button.endingIcon }} />}
    </button>
  )
}

export default Button
