import { PropTypes } from "@/components/components"

export type StorybookControlCenterTypes = {
  propList: Array<PropTypes>
  onChangeForm: React.FormEventHandler<HTMLFormElement>
  currentDefaults: object
}
