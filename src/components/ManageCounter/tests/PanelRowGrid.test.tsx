import * as React from 'react';
import { shallow } from 'enzyme';

import PanelRowGrid from '../PanelRowGrid';

describe('PanelRowGrid', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PanelRowGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
