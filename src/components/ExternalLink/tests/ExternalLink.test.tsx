import * as React from 'react';
import { shallow } from 'enzyme';

import ExternalLink from '../index';

describe('ExternalLink', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ExternalLink href="http://taylorswift.com">Swift</ExternalLink>);
    expect(wrapper).toMatchSnapshot();
  });
});
