import * as React from 'react';

// Using lookup types
type CounterRenderProps = CounterState & {
  increase: Counter['increase'];
  decrease: Counter['decrease'];
  initialCount: CounterProps['initialCount'];
};

export interface CounterProps {
  initialCount: number;
  step: number;
  children: (args: CounterRenderProps) => JSX.Element;
}

export interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  static readonly defaultProps = {
    initialCount: 0,
    step: 1
  };

  readonly state = {
    count: this.props.initialCount
  };

  render() {
    return this.props.children({
      count: this.state.count,
      initialCount: this.props.initialCount,
      increase: this.increase,
      decrease: this.decrease
    });
  }

  private increase = () => {
    this.setState(prevState => ({ count: prevState.count + this.props.step }));
  };

  private decrease = () => {
    this.setState(prevState => {
      // When setState returns null there are no unnesesary rerenders
      // In this case it prevents counter from going below initial value
      if (prevState.count <= this.props.initialCount) {
        return null;
      }
      return { count: prevState.count - this.props.step };
    });
  };
}

export default Counter;
