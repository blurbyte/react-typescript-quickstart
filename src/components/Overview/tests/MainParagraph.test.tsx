import * as React from 'react';
import { shallow } from 'enzyme';

import MainParagraph from '../MainParagraph';

describe('MainParagraph', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<MainParagraph />);
    expect(wrapper).toMatchSnapshot();
  });
});
