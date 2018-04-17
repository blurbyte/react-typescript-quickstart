import * as React from 'react';
import { shallow } from 'enzyme';

import ModulesOverview from '../index';

describe('ModulesOverview', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ModulesOverview />);
    expect(wrapper).toMatchSnapshot();
  });
});
