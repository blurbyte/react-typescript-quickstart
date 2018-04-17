import * as React from 'react';
import { shallow } from 'enzyme';

import MainContentColumn from '../MainContentColumn';

describe('MainContentColumn', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainContentColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
