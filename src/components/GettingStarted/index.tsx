import * as React from 'react';

import SecondaryHeadline from '../SecondaryHeadline';
import Text from '../Text';
import TextList from '../TextList';
import ExternalLink from '../ExternalLink';

class GettingStarted extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section>
        <SecondaryHeadline>Getting started!</SecondaryHeadline>
        <Text>Just follow a few easy steps to set up a project:</Text>
        <TextList ordered>
          <TextList.Item>
            Install <strong>Node > 8</strong>.
          </TextList.Item>
          <TextList.Item>
            Install <strong>Git</strong>.
          </TextList.Item>
          <TextList.Item>
            Clone the repository{' '}
            <code>
              git clone https:
              {'//'}
              github.com/blurbyte/react-typescript-quickstart
            </code>
            .
          </TextList.Item>
          <TextList.Item>
            Install <em>React Developer Tools</em> &mdash; provides insight about virtual DOM and components props and
            state.
          </TextList.Item>
          <TextList.Item>
            Enter project folder and install all required modules with simple <code>npm install</code> command.
          </TextList.Item>
          <TextList.Item>
            Start demo app in <em>development</em> mode <code>npm start</code>. It will build a project, start webserver
            and open app in your browser 🙂.
          </TextList.Item>
          <TextList.Item>
            All project files are placed under <strong>/src</strong> folder.
          </TextList.Item>
          <TextList.Item>
            To make a <em>production</em> build run <code>npm run build</code>, which will create ready to deploy static
            files in <strong>/dist</strong> directory.
          </TextList.Item>
        </TextList>
        <Text>
          Besides that app is actually live at{' '}
          <ExternalLink href="https://reactquickstart.surge.sh">reactquickstart.surge.sh</ExternalLink> 🚀.
        </Text>
      </section>
    );
  }
}

export default GettingStarted;
