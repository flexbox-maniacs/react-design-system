import { ComponentTypes } from "@component"

type TableProps = {
  headers?: Array<string>
}

export type TableTypes = ComponentTypes & {
  table: TableProps
  children: React.ReactNode
}
