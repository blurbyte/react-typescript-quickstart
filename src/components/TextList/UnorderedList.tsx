import styled from 'styled-components';

import { Color } from '@styles/colors';

export interface UnorderedListProps {
  simple?: boolean;
}

const UnorderedList = styled.ul<UnorderedListProps>`
  margin: 0;
  padding: ${props => (props.simple ? 0 : 'auto')};
  color: ${Color.DarkGray};
  list-style-type: ${props => (props.simple ? 'none' : 'square')};
`;

export default UnorderedList;
