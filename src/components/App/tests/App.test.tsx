import * as React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../index';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
