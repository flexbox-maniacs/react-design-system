import { useClassName } from "@scripts"
import { Icon } from "@ds"
import { ButtonTypes, ButtonProps } from "./types"
import "./style.scss"

function Button({ button, className, handleClick }: ButtonTypes): JSX.Element {
  const { style = "fill", variant = "primary" }: ButtonProps = button

  const buttonClassList = {
    size: `size-${button.size}`,
    style: style,
    variant: variant,
  }

  const buttonClass = useClassName([className ?? null, "button"], button, buttonClassList)

  return (
    <button className={buttonClass} onClick={handleClick} type={button.submit ? "submit" : undefined}>
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
