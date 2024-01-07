import { useClassName } from "@scripts"
import TextStyle from "../text-style"
import { CardTypes } from "./types"
import "./style.scss"

function Card({ card, id, children }: CardTypes): JSX.Element {
  const cardClass = useClassName("card")

  return (
    <div className={cardClass} id={id}>
      {card && card.header && card.header.title && (
        <header className="card-header">
          <h2 className="card-header-title">{card.header.title}</h2>
          {card.header.subtitle && (
            <TextStyle style={{ muted: true }} className="card-header-subtitle">
              {card.header.subtitle}
            </TextStyle>
          )}
          {card.header.note && <small className="card-header-note">{card.header.note}</small>}
        </header>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
