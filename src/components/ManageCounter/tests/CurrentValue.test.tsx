import * as React from 'react';
import { shallow } from 'enzyme';

import CurrentValue from '../CurrentValue';

describe('CurrentValue', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CurrentValue />);
    expect(wrapper).toMatchSnapshot();
  });
});
