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
          </tbody>
        </Table>
      </section>
    );
  }
}

export default ModulesOverview;
