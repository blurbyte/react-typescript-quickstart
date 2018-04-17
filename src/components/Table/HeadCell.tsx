import styled from '@styles/styledComponents';

import BaseCell from './Cell';

const Cell = BaseCell.withComponent('th');

const HeadCell = styled(Cell)`
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-weight: 300;
  background: rgba(40, 40, 40, 0.1);
`;

export default HeadCell;
