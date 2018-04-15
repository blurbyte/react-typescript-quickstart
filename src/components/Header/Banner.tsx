import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

const Banner = styled.header`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  height: 6.4rem;
  padding: 0 6.4rem;
  border-bottom: 1px solid ${Colors.gray};
  box-shadow: 0 4px 4px -1px rgba(40, 40, 40, 0.1);
`;

export default Banner;
