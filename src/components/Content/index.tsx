import styled from '@styles/styledComponents';
import media from '@styles/media';

const Content = styled.div`
  padding: 0 6.4rem;
  max-width: 144rem;
  margin: 0 auto;

  ${media.desktop`
    padding: 0 3.2rem;
  `};

  ${media.phone`
    padding: 0 1.6rem;
  `};
`;

export default Content;
