import styled from '@styles/styledComponents';

import Text from '../Text';

const ListItem = Text.withComponent('li');

const Item = styled(ListItem)`
  margin: 0.2rem 0;
`;

export default Item;
