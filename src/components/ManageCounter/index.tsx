import * as React from 'react';

import MainParagraph from '../MainParagraph';
import Headline from '../Headline';
import Counter from '../Counter';
import Button from '../Button';
import Section from '../Section';
import CurrentValue from './CurrentValue';
import Panel from './Panel';
import PanelRow from './PanelRow';
import PanelRowGrid from './PanelRowGrid';
import Description from './Description';

class ManageCounter extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Section>
        <Headline>Manage Counter</Headline>
        <MainParagraph>
          A strigtforward counter example built using popular <em>render props</em> pattern.
        </MainParagraph>
        <Counter initialCount={10} step={2}>
          {({ count, initialCount, increase, decrease }) => (
            <Panel>
              <PanelRow>
                <Description>Current Counter Value</Description>
                <CurrentValue>{count}</CurrentValue>
              </PanelRow>
              <PanelRowGrid>
                <Button onClick={increase}>Increase</Button>
                <Button disabled={count <= initialCount} onClick={decrease}>
                  Decrease
                </Button>
              </PanelRowGrid>
            </Panel>
          )}
        </Counter>
      </Section>
    );
  }
}

export default ManageCounter;
