import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import MainRouter from './routers/Routers';
import Navbar from './basic_components/Navbar';
import Footer from './basic_components/Footer';
import store from './redux/store';
import theme from './Theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainRouter />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
