import * as React from 'react';

import Header from '../Header';
import MainContent from '../MainContent';
import Overview from '../Overview';
import Wrapper from './Wrapper';

// In this case Props and State are automatically initialized to {}
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <MainContent>
          <Overview />
        </MainContent>
      </Wrapper>
    );
  }
}

export default App;
