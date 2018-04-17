import * as React from 'react';

import UnorderedList from './UnorderedList';
import OrderedList from './OrderedList';
import Item from './Item';

export interface TextListProps {
  ordered?: boolean;
  simple?: boolean;
  children?: React.ReactNode;
}

class TextList extends React.Component<TextListProps, {}> {
  static Item = Item;

  render() {
    const { children, ordered, simple } = this.props;
    return ordered ? <OrderedList>{children}</OrderedList> : <UnorderedList simple={simple}>{children}</UnorderedList>;
  }
}

export default TextList;
