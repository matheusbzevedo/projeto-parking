import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyle from './../styles/global';

const  MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
