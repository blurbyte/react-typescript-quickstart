import * as React from 'react';

import Banner from './Banner';
import Logo from './Logo';
import ProjectTitle from './ProjectTitle';

class Header extends React.Component {
  render() {
    return (
      <Banner>
        <Logo />
        <ProjectTitle>React TypeScript Quickstart</ProjectTitle>
      </Banner>
    );
  }
}

export default Header;
