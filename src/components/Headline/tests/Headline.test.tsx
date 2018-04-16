import * as React from 'react';
import { shallow } from 'enzyme';

import Headline from '../index';

describe('Headline', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Headline />);
    expect(wrapper).toMatchSnapshot();
  });
});
