import styled from '@styles/styledComponents';

import { Color } from '@styles/colors';
import media from '@styles/media';

const Panel = styled.div`
  width: 40rem;
  border-top: 1px solid ${Color.Gray};
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${media.tablet`
    width: 100%;
  `};
`;

export default Panel;
