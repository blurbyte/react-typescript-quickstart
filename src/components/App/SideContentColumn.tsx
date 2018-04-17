import styled from '@styles/styledComponents';
import media from '@styles/media';

const SideContentColumn = styled.section`
  grid-column: -2 / -1;

  ${media.desktop`
    grid-column: 1 / -1;
  `};
`;

export default SideContentColumn;
