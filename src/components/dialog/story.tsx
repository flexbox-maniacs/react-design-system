import Dialog from "."
import { DialogProps } from "./types"

function DialogStory(defaultProps: DialogProps): JSX.Element {
  return <Dialog dialog={defaultProps} />
}

export const defaults = {
  title: "oid",
} as DialogProps

export default DialogStory
