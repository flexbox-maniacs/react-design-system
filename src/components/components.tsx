import ButtonStory, { defaults as ButtonDefaults } from "./button/story"
import CardStory, { defaults as CardDefaults } from "./card/story"
import DialogStory, { defaults as DialogDefaults } from "./dialog/story"
import IconStory, { defaults as IconDefaults } from "./icon/story"
import InputStory, { defaults as InputDefaults } from "./input/story"
import TextStyleStory, { defaults as TextStyleDefaults } from "./text-style/story"

export type PropTypes = { name: string; type: "string" | "option" | "boolean" | "number"; options?: Array<string> }

type ComponentSettings = { name: string; story: any; defaults: object; propList: Array<PropTypes> }

export const components: Array<ComponentSettings> = [
  {
    name: "Button",
    story: ButtonStory,
    defaults: ButtonDefaults,
    propList: [
      { name: "label", type: "string" },
      { name: "startingIcon", type: "string" },
      { name: "icon", type: "string" },
      { name: "endingIcon", type: "string" },
      { name: "variant", type: "option", options: ["primary", "transparent"] },
      { name: "style", type: "option", options: ["outlined", "fill"] },
      { name: "size", type: "option", options: ["small", "default", "large"] },
      { name: "submit", type: "boolean" },
    ],
  },
  {
    name: "Card",
    story: CardStory,
    defaults: CardDefaults,
    propList: [
      { name: "title", type: "string" },
      { name: "subtitle", type: "string" },
    ],
  },
  {
    name: "Dialog",
    story: DialogStory,
    defaults: DialogDefaults,
    propList: [
      { name: "title", type: "string" },
      { name: "subtitle", type: "string" },
    ],
  },
  {
    name: "Icon",
    story: IconStory,
    defaults: IconDefaults,
    propList: [
      { name: "name", type: "string" },
      { name: "type", type: "option", options: ["outlined", "rounded", "sharp"] },
    ],
  },
  {
    name: "Input",
    story: InputStory,
    defaults: InputDefaults,
    propList: [
      { name: "name", type: "string" },
      { name: "defaultValue", type: "string" },
      { name: "type", type: "string" },
      { name: "select", type: "string" },
    ],
  },
  {
    name: "Text Style",
    story: TextStyleStory,
    defaults: TextStyleDefaults,
    propList: [{ name: "bold", type: "boolean" }],
  },
]
