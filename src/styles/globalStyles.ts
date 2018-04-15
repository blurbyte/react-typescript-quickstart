import { injectGlobal } from './styledComponents';
import { Colors } from './colors';

// tslint:disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700');

  html {
    font-size: 62.5%;
  }

  body {
    background: ${Colors.white};
    color: ${Colors.gray};
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    font-size: 1.4rem;
    font-weight: 300;
    overflow-y: scroll;
  }

  ::-moz-selection {
    background: rgba(74,108,187,0.2);
    color: inherit;
  }

  ::selection {
    background: rgba(74,108,187,0.2);
    color: inherit;
  }
`;
