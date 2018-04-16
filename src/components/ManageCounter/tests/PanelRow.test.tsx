import * as React from 'react';
import { shallow } from 'enzyme';

import PanelRow from '../PanelRow';

describe('PanelRow', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PanelRow />);
    expect(wrapper).toMatchSnapshot();
  });
});
