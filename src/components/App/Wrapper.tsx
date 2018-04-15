import styled from '@styles/styledComponents';
import media from '@styles/media';

const Wrapper = styled.h1`
  background-color: blue;

  ${media.tablet`
    background-color: red;
  `};
`;

export default Wrapper;
