import UiDialog from "."
import { DialogProps } from "./types"

function DialogStory(defaultProps: DialogProps): JSX.Element {
  return <UiDialog dialog={defaultProps} />
}

export const defaults = {
  title: "oid",
} as DialogProps

export default DialogStory
