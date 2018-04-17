import styled from '@styles/styledComponents';
import media from '@styles/media';

const MainContentColumn = styled.section`
  grid-column: 1 / -2;

  ${media.desktop`
    grid-column: 1 / -1;
  `};
`;

export default MainContentColumn;
