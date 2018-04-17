import * as React from 'react';

import SecondaryHeadline from '../SecondaryHeadline';
import Text from '../Text';
import TextList from '../TextList';

class CoreConcepts extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <>
        <SecondaryHeadline>What will you learn?</SecondaryHeadline>
        <Text>By inspecting source code of this demo application you can get a good grasp of:</Text>
        <TextList>
          <TextList.Item>How to set up TypeScript development environment for React web app</TextList.Item>
          <TextList.Item>How to organize file structure of your project</TextList.Item>
          <TextList.Item>How to write unit and integration tests</TextList.Item>
          <TextList.Item>
            How to take advantage of <em>styled-components</em>
          </TextList.Item>
        </TextList>
      </>
    );
  }
}

export default CoreConcepts;
