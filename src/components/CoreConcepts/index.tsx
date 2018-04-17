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
      <section>
        <SecondaryHeadline>What will you learn?</SecondaryHeadline>
        <Text>By inspecting source code of this demo application you can get a good grasp of:</Text>
        <TextList>
          <TextList.Item>How to set up TypeScript development environment for React web app</TextList.Item>
          <TextList.Item>How to organize file structure of your project</TextList.Item>
          <TextList.Item>
            How to implement and test <strong>render props</strong> component &mdash; <em>src/components/Counter</em>{' '}
            and <em>src/components/ManageCounter</em>
          </TextList.Item>
          <TextList.Item>
            How to create <strong>compound</strong> component &mdash; <em>src/components/TextList</em>
          </TextList.Item>
          <TextList.Item>How to write unit and integration tests</TextList.Item>
          <TextList.Item>How to setup strightforward CI/CD pipeline with TravisCI and Surge</TextList.Item>
          <TextList.Item>
            How to create fully responsive layout with <strong>css grid</strong> and <strong>styled-components</strong>
          </TextList.Item>
        </TextList>
      </section>
    );
  }
}

export default CoreConcepts;
