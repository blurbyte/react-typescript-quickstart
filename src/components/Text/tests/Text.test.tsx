import * as React from 'react';
import { shallow } from 'enzyme';

import Text from '../index';

describe('Text', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Text />);
    expect(wrapper).toMatchSnapshot();
  });
});
