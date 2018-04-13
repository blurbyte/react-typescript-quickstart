import * as React from 'react';

export interface AppProps {
  children?: React.ReactNode
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div>Hello TypeScript!</div>
    );
  }
}

export default App;
