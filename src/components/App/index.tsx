import * as React from 'react';
import styled from '@styles/styledComponents';

const Wrapper = styled.h1`
  background-color: red;
`;

// In this case Props and State are automatically initialized to {}
class App extends React.Component {
  render() {
    return <Wrapper>Hello TypeScript!</Wrapper>;
  }
}

export default App;
