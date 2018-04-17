import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

const Text = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  color: ${Colors.darkGray};
  margin: 0.8rem 0;

  & strong {
    font-weight: 700;
  }
`;

export default Text;
