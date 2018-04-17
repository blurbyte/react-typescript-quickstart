import * as React from 'react';
import { shallow } from 'enzyme';

import MainContent from '../MainContent';

describe('MainContent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
