type CellProps = {
  colspan?: number
  rowspan?: number
}

export type TableCellTypes = {
  cell?: CellProps
  children: React.ReactNode
}
