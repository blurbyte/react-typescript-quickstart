import * as React from 'react';
import { shallow } from 'enzyme';

import GettingStarted from '../index';

describe('CoreConcepts', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GettingStarted />);
    expect(wrapper).toMatchSnapshot();
  });
});
