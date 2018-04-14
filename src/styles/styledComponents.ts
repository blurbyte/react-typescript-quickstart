// Wrapper to let styled-components work better with TypeScript

import * as styledComponets from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

// If using any theme its interface has to be defined
const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponets as ThemedStyledComponentsModule<{}>;

// Re-exporting modules to be spec compliant
export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
