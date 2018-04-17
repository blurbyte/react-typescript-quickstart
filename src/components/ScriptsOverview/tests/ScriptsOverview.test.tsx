import * as React from 'react';
import { shallow } from 'enzyme';

import ScriptsOverview from '../index';

describe('ScriptsOverview', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ScriptsOverview />);
    expect(wrapper).toMatchSnapshot();
  });
});
