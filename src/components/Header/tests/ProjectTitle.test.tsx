import * as React from 'react';
import { shallow } from 'enzyme';

import ProjectTitle from '../ProjectTitle';

describe('ProjectTitle', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ProjectTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
