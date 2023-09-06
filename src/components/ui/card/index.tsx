import { useClassName } from "@scripts"
import { UiTextStyle } from "@ui"
import { CardTypes } from "./types"
import "./style.scss"

function UiCard({ card, id, children }: CardTypes): JSX.Element {
  const cardClass = useClassName(["card"])

  return (
    <div className={cardClass} id={id}>
      {card && card.header && card.header.title && (
        <header className="card-header">
          <h4 className="card-header-title">{card.header.title}</h4>
          {card.header.subtitle && (
            <UiTextStyle style={{ muted: true }} className="card-header-subtitle">
              {card.header.subtitle}
            </UiTextStyle>
          )}
        </header>
      )}
      <div className="card-body">{children}</div>
    </div>
  )
}

export default UiCard
