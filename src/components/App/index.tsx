import * as React from 'react';

import Header from '../Header';
import Overview from '../Overview';
import ManageCounter from '../ManageCounter';
import GettingStarted from '../GettingStarted';
import ModulesOverview from '../ModulesOverview';
import CoreConcepts from '../CoreConcepts';
import Contact from '../Contact';
import Wrapper from './Wrapper';
import MainContent from './MainContent';
import MainContentColumn from './MainContentColumn';
import SideContentColumn from './SideContentColumn';

// In this case Props and State are automatically initialized to {}
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <MainContent>
          <Overview />
          <ManageCounter initialCount={10} step={2} />
          <MainContentColumn>
            <GettingStarted />
            <ModulesOverview />
          </MainContentColumn>
          <SideContentColumn>
            <CoreConcepts />
            <Contact />
          </SideContentColumn>
        </MainContent>
      </Wrapper>
    );
  }
}

export default App;
