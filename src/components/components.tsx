/* import IconStory from "./icon/story"
import TextStyleStory from "./ui/text-style/story"
import IconStory from "./ui/icon/story" */
import ButtonStory from "./ui/button/story"
import { defaults as ButtonDefaults } from "./ui/button/story"

type PropTypes = { name: string; type: string | Array<string> }

type ComponentProps = { name: string; story: any; defaults: object; propList: Array<PropTypes> }

type componentTypes = Array<ComponentProps>

export const components: componentTypes = [
  {
    name: "Button",
    story: ButtonStory,
    defaults: ButtonDefaults,
    propList: [
      { name: "label", type: "" },
      { name: "startingIcon", type: "" },
      { name: "icon", type: "" },
      { name: "endingIcon", type: "" },
      { name: "variant", type: ["primary", "transparent"] },
      { name: "type", type: ["outlined", "fill"] },
      { name: "size", type: ["small", "large"] },
    ],
  },
]
