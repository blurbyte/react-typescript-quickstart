import styled from '@styles/styledComponents';
import { Color } from '@styles/colors';

const Text = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  color: ${Color.DarkGray};
  margin: 0.8rem 0;

  & strong {
    font-weight: 700;
  }
`;

export default Text;
