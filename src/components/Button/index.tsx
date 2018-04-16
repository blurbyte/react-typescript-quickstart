import styled from '@styles/styledComponents';
import { Colors } from '@styles/colors';

const Button = styled.button`
  background: rgba(40, 40, 40, 0.05);
  border: none;
  color: ${Colors.blue};
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  height: 3.6rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.4s ease;
  outline: 0;

  &:hover {
    background: rgba(40, 40, 40, 0.1);
  }

  &:active {
    background: rgba(74, 108, 187, 0.2);
  }

  &:focus {
    border: 1px solid rgba(74, 108, 187, 0.6);
  }

  &:disabled {
    color: rgba(40, 40, 40, 0.3);
    background: rgba(40, 40, 40, 0.05);
    cursor: default;
  }
`;

export default Button;
