import styled from '@styles/styledComponents';
import Content from '../Content';

const Article = Content.withComponent('article');

const MainContent = styled(Article)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export default MainContent;
