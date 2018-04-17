import styled from '@styles/styledComponents';
import media from '@styles/media';

import Content from '../Content';

const Article = Content.withComponent('article');

const MainContent = styled(Article)`
  display: grid;
  grid-template-columns: repeat(2, 1fr) minmax(30rem, 1fr);
  grid-gap: 0 3rem;
  padding-bottom: 6rem;
  padding-top: 9rem;

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    padding-top: 6rem;
  `};
`;

export default MainContent;
