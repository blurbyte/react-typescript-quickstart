import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

const ProjectTitle = styled.p`
  text-transform: uppercase;
  cursor: default;
  flex-shrink: 0;
  border-left: 1px solid ${Colors.gray};
  margin: 0;
  margin-left: 1.4rem;
  padding: 1rem 1.4rem;
  user-select: none;
`;

export default ProjectTitle;
