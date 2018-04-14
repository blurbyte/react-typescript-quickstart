import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../index';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
