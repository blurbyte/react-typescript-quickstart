import * as React from 'react';
import { shallow } from 'enzyme';

import MainParagraph from '../index';

describe('MainParagraph', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainParagraph />);
    expect(wrapper).toMatchSnapshot();
  });
});
