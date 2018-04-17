import * as React from 'react';
import { shallow } from 'enzyme';

import UnorderedList from '../UnorderedList';

describe('UnorderedList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UnorderedList />);
    expect(wrapper).toMatchSnapshot();
  });
});
