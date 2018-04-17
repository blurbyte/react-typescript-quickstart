import * as React from 'react';

import SecondaryHeadline from '../SecondaryHeadline';
import Text from '../Text';
import Table from '../Table';

class ScriptsOverview extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section>
        <SecondaryHeadline>NPM Scripts overview</SecondaryHeadline>
        <Text>Just a grasp of what could be found in package.json:</Text>
        <Table>
          <thead>
            <tr>
              <Table.HeadCell>Script name</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </tr>
          </thead>
          <tbody>
            <Table.Row>
              <Table.Cell>start</Table.Cell>
              <Table.Cell>Launches app in development mode</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>build</Table.Cell>
              <Table.Cell>Creates production, ready to deploy build of the app</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>test</Table.Cell>
              <Table.Cell>Runs whole test suite</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>test:watch</Table.Cell>
              <Table.Cell>Watch files for changes and rerun related tests</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>test:update</Table.Cell>
              <Table.Cell>Updates all test snapshots</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>lint</Table.Cell>
              <Table.Cell>Checks the whole project for linting errors</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>typecheck</Table.Cell>
              <Table.Cell>Runs TypeScript compiler to find type errors</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>format</Table.Cell>
              <Table.Cell>Formats code with prettier</Table.Cell>
            </Table.Row>
          </tbody>
        </Table>
      </section>
    );
  }
}

export default ScriptsOverview;
