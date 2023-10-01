import { useClassName } from "@scripts"
import { TextStyle } from "@ui"
import { CardTypes } from "./types"
import "./style.scss"

function Card({ card, id, children }: CardTypes): JSX.Element {
  const cardClass = useClassName(["card"])

  return (
    <div className={cardClass} id={id}>
      {card && card.header && card.header.title && (
        <header className="card-header">
          <h4 className="card-header-title">{card.header.title}</h4>
          {card.header.subtitle && (
            <TextStyle style={{ muted: true }} className="card-header-subtitle">
              {card.header.subtitle}
            </TextStyle>
          )}
        </header>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
