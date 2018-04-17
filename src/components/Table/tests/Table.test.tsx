import * as React from 'react';
import { shallow } from 'enzyme';

import Table from '../index';

describe('Table', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly Cell', () => {
    const wrapper = shallow(<Table.Cell />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly HeadeCell', () => {
    const wrapper = shallow(<Table.HeadCell />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly Row', () => {
    const wrapper = shallow(<Table.Row />);
    expect(wrapper).toMatchSnapshot();
  });
});
