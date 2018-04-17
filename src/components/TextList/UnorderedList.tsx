import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

export interface UnorderedListProps {
  simple?: boolean;
}

const UnorderedList = styled<UnorderedListProps, 'ul'>('ul')`
  margin: 0;
  padding: ${props => (props.simple ? 0 : 'auto')};
  color: ${Colors.darkGray};
  list-style-type: ${props => (props.simple ? 'none' : 'square')};
`;

export default UnorderedList;