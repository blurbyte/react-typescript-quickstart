import * as React from 'react';

import SecondaryHeadline from '../SecondaryHeadline';
import Text from '../Text';
import Table from '../Table';

class ModulesOverview extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section>
        <SecondaryHeadline>Comprehensive modules overview</SecondaryHeadline>
        <Text>There are a lot of interesting tech choices:</Text>
        <Table>
          <thead>
            <tr>
              <Table.HeadCell>Related modules</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
            </tr>
          </thead>
          <tbody>
            <Table.Row>
              <Table.Cell>react, react-dom</Table.Cell>
              <Table.Cell>Reusable components for web applications</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>typescript</Table.Cell>
              <Table.Cell>JavaScript but with types (and more)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>fusebox</Table.Cell>
              <Table.Cell>Great bundler with simple configuration shipped with handy task manager</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>tslint</Table.Cell>
              <Table.Cell>Reports TypeScript and React syntax errors</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>styled-components</Table.Cell>
              <Table.Cell>Scoped components CSS styles, how awesome is it?</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>jest</Table.Cell>
              <Table.Cell>Automated test framework with built in assertion library</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>enzyme</Table.Cell>
              <Table.Cell>React testing utilities</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>prettier, lint-staged</Table.Cell>
              <Table.Cell>Enforces consistent coding style</Table.Cell>
            </Table.Row>
          </tbody>
        </Table>
      </section>
    );
  }
}

export default ModulesOverview;
