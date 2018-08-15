import styled from 'styled-components';

import { Color } from '@styles/colors';

const Cell = styled.td`
  font-family: Helvetica, Arial, sans-serif;
  text-align: left;
  padding: 1.4rem;

  &:first-child {
    border-right: 1px solid ${Color.Gray};
  }

  & strong {
    font-weight: 700;
  }
`;

export default Cell;
