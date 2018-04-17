import styled from '@styles/styledComponents';
import UnorderedList from './UnorderedList';

const List = UnorderedList.withComponent('ol');

const OrderedList = styled(List)`
  list-style-type: decimal;
`;

export default OrderedList;
