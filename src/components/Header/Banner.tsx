import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

const Banner = styled.header`
  position: fixed;
  background: ${Colors.white};
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${Colors.gray};
  box-shadow: 0 4px 4px -1px rgba(40, 40, 40, 0.1);
`;

export default Banner;
