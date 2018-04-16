import * as React from 'react';
import { mount } from 'enzyme';

import Counter from '../index';

describe('Counter', () => {
  it('calls the render prop function', () => {
    const renderFunc = jest.fn().mockReturnValue(null);

    const wrapper = mount(<Counter>{renderFunc}</Counter>);

    expect(renderFunc).toHaveBeenCalled();
    expect(wrapper.state('count')).toEqual(0);
  });

  it('accepts initial value and step', () => {
    const renderFunc = jest.fn().mockReturnValue(null);

    const wrapper = mount(
      <Counter initialCount={33} step={3}>
        {renderFunc}
      </Counter>
    );

    expect(wrapper.state('count')).toEqual(33);
    expect(wrapper.prop('step')).toEqual(3);
  });
});
