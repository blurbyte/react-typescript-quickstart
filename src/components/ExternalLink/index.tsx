import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

const ExternalLink = styled.a.attrs({
  target: '_blank'
})`
  color: ${Colors.blue};
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default ExternalLink;
