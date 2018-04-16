import * as React from 'react';

import MainParagraph from '../MainParagraph';
import Headline from '../Headline';
import Wrapper from './Wrapper';

class Overview extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <Headline>Welcome to React TypeScript Quickstart</Headline>
        <MainParagraph>
          A simple React starter kit, but with TypeScript. It takes care of initial developement environment setup and
          puts everything to use in simple example. Notable technologies used: React, TypeScript, FuseBox, TSLint and
          styled-components. Formatted with prettier.
        </MainParagraph>
      </Wrapper>
    );
  }
}

export default Overview;
