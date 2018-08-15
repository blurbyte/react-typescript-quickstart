import styled from 'styled-components';

import { Color } from '@styles/colors';

const ExternalLink = styled.a.attrs({
  target: '_blank'
})`
  color: ${Color.Blue};
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default ExternalLink;
