import * as React from 'react';

import SecondaryHeadline from '../SecondaryHeadline';
import TextList from '../TextList';
import ExternalLink from '../ExternalLink';

class Contact extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section>
        <SecondaryHeadline>Check it out!</SecondaryHeadline>
        <TextList simple>
          <TextList.Item>
            Check out my other projects on <ExternalLink href="https://github.com/blurbyte">GitHub</ExternalLink>
          </TextList.Item>
          <TextList.Item>
            Contact me via <ExternalLink href="https://twitter.com/blurbyte">Twitter</ExternalLink>
          </TextList.Item>
          <TextList.Item>
            Visit <ExternalLink href="http://blurbyte.com">blurbyte.com</ExternalLink>
          </TextList.Item>
        </TextList>
      </section>
    );
  }
}

export default Contact;
