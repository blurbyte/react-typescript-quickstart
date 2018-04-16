import * as React from 'react';

import Header from '../Header';
import MainContent from '../MainContent';
import Overview from '../Overview';
import ManageCounter from '../ManageCounter';
import Wrapper from './Wrapper';

// In this case Props and State are automatically initialized to {}
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <MainContent>
          <Overview />
          <ManageCounter initialCount={10} step={2} />
        </MainContent>
      </Wrapper>
    );
  }
}

export default App;
