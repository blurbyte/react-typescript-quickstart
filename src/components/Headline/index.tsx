import styled from '@styles/styledComponents';
import { Color } from '@styles/colors';

const Headline = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  letter-spacing: -0.2rem;
  color: ${Color.Blue};
  border-top: 2px solid ${Color.Gray};
  padding-top: 1rem;
  margin-top: 3rem;
  margin-bottom: 2.4rem;
  line-height: 1.2;
`;

export default Headline;
