import * as React from 'react';
import { shallow } from 'enzyme';

import CoreConcepts from '../index';

describe('CoreConcepts', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CoreConcepts />);
    expect(wrapper).toMatchSnapshot();
  });
});
