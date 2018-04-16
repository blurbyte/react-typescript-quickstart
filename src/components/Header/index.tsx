import * as React from 'react';

import Banner from './Banner';
import Content from './Content';
import Logo from './Logo';
import ProjectTitle from './ProjectTitle';

class Header extends React.Component {
  render() {
    return (
      <Banner>
        <Content>
          <Logo />
          <ProjectTitle>React TypeScript Quickstart</ProjectTitle>
        </Content>
      </Banner>
    );
  }
}

export default Header;
