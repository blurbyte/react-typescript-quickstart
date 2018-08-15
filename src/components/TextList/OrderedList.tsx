import styled from 'styled-components';

import UnorderedList from './UnorderedList';

const List = UnorderedList.withComponent('ol');

const OrderedList = styled(List)`
  list-style-type: decimal;
`;

export default OrderedList;
