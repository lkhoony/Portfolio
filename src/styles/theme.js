import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

/**
 * theme.js를 불러와 ThemeProvider theme props로 전달
 * GlobalStyles에서 theme에 접근하여 style을 가져올 수 있음
 */
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;