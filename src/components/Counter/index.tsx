import * as React from 'react';

export interface CounterProps {
  children: (args: CounterRenderProps) => JSX.Element;
}

export interface CounterState {
  value: number;
}

type CounterRenderProps = CounterState & {
  increase: Counter['increase'];
  decrease: Counter['decrease'];
};

class Counter extends React.Component<CounterProps, CounterState> {
  state = {
    value: 0
  };

  render() {
    return this.props.children({
      value: this.state.value,
      increase: this.increase,
      decrease: this.decrease
    });
  }

  private increase = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  private decrease = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
}

export default Counter;
