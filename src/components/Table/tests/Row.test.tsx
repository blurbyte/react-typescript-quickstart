import * as React from 'react';
import { shallow } from 'enzyme';

import Row from '../Row';

describe('Row', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });
});
