import { useState } from "react"
import { DialogTypes } from "./types"
import "./style.scss"

function Dialog({ dialog }: DialogTypes): JSX.Element {
  const [isDialogOpen, setDialogOpen] = useState(true)

  function closeDialog() {
    setDialogOpen(false)
  }

  return (
    <dialog className="dialog" open style={{ backdropFilter: "red" }}>
      {dialog.title && <h5 className="dialog-title">{dialog.title}</h5>}
      {dialog.caption && <p className="dialog-caption">{dialog.caption}</p>}
      odjfoaijfoadifjsodf
      <p>aosdjaosidj</p>
      <p>aosdjaosidj</p>
      <p>aosdjaosidj</p>
      <p>aosdjaosidj</p>
    </dialog>
  )
}

export default Dialog
