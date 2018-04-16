import * as React from 'react';

export type CounterProps = Partial<CounterDefaultProps> & {
  children: (args: CounterRenderProps) => JSX.Element;
};

export interface CounterState {
  count: number;
}

export interface CounterDefaultProps {
  initialCount: number;
  step: number;
}

// Using lookup types
type CounterRenderProps = CounterState & {
  increase: Counter['increase'];
  decrease: Counter['decrease'];
  initialCount: CounterDefaultProps['initialCount'];
};

// Using bang operator (!) to explicitly tell compiler default props won't be undefined
// Should be updated when defaultProps will be fixed in React type defs
class Counter extends React.Component<CounterProps, CounterState> {
  static readonly defaultProps: CounterDefaultProps = {
    initialCount: 0,
    step: 1
  };

  readonly state = {
    count: this.props.initialCount!
  };

  render() {
    return this.props.children({
      count: this.state.count,
      initialCount: this.props.initialCount!,
      increase: this.increase,
      decrease: this.decrease
    });
  }

  private increase = () => {
    this.setState(prevState => ({ count: prevState.count + this.props.step! }));
  };

  private decrease = () => {
    this.setState(prevState => {
      // When setState returns null there are no unnesesary rerenders
      // In this case it prevents counter from going below initial value
      if (prevState.count <= this.props.initialCount!) {
        return null;
      }
      return { count: prevState.count - this.props.step! };
    });
  };
}

export default Counter;
