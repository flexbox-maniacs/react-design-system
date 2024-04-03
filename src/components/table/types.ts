type TableProps = {
  caption?: string
  headers?: Array<string>
  prefix?: string | boolean
}

export type TableTypes = {
  table: TableProps
  children: React.ReactNode
}
