import * as React from 'react';

import Header from '../Header';
import Content from './Content';

// In this case Props and State are automatically initialized to {}
class App extends React.Component {
  render() {
    return (
      <Content>
        <Header />
      </Content>
    );
  }
}

export default App;
