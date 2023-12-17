import { useClassName } from "@scripts"
import Icon from "../icon"
import { ButtonTypes, ButtonProps } from "./types"
import "./style.scss"

function Button({ button, className, onClick }: ButtonTypes): JSX.Element {
  const { style = "fill", variant = "primary" }: ButtonProps = button

  const buttonClassList = {
    size: `size-${button.size}`,
    style: style,
    variant: variant,
  }

  const buttonClass = useClassName("button", button, buttonClassList, className)

  return (
    <button className={buttonClass} onClick={onClick} type={button.submit ? "submit" : undefined}>
      {button.startingIcon ? (
        <Icon icon={{ name: button.startingIcon }} />
      ) : (
        button.icon && <Icon icon={{ name: button.icon }} />
      )}
      {button.label && <span className="button-label">{button.label}</span>}
      {button.endingIcon && <Icon icon={{ name: button.endingIcon }} />}
    </button>
  )
}

export default Button
