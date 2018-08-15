import styled from '@styles/styledComponents';
import { Color } from '@styles/colors';

const CurrentValue = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 3.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${Color.White};
  background: ${Color.Blue};
  padding: 0 1.4rem;
  border-radius: 6px;
  min-width: 8rem;
  margin: 1rem 0;
`;

export default CurrentValue;
