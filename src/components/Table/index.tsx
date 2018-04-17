import * as React from 'react';

import Cell from './Cell';
import HeadCell from './HeadCell';
import Row from './Row';
import Wrapper from './Wrapper';

export interface TableProps {
  children?: React.ReactNode;
}

class Table extends React.Component<TableProps, {}> {
  static Cell = Cell;
  static HeadCell = HeadCell;
  static Row = Row;

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Table;
