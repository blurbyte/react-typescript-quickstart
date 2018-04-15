import { injectGlobal } from './styledComponents';

// tslint:disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700');

  html {
    font-size: 62.5%;
  }

  body {
    background: #ffffff;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    font-size: 1.4rem;
    font-weight: 300;
    overflow-y: scroll;
  }
`;
