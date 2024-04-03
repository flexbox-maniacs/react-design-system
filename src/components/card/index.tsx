import { useClassName } from "@scripts"
import TextStyle from "../text-style"
import { CardTypes } from "./types"
import "./style.scss"

function Card({ card, children }: CardTypes): JSX.Element {
  const cardClass = useClassName("card")

  return (
    <div className={cardClass}>
      {card && card.header && card.header.title && (
        <div className="card-header">
          <div className="card-header-title-group">
            <h2 className="card-header-title">{card.header.title}</h2>
            {card.header.subtitle && <TextStyle style={{ muted: true }} children={card.header.subtitle} />}
          </div>
          {card.header.note && (
            <small className="card-header-note">
              <TextStyle style={{ muted: true }} children={card.header.note} />
            </small>
          )}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
