import { useState } from 'react'
import React from 'react';
import './App.css'
import MainRouter from './routers/Routers'
import { Provider } from 'react-redux'
import './index.css';
import Navbar from './basic_components/Navbar'
import Footer from './basic_components/Footer'
import store from './redux/store';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
 <Provider store={store}>     
 <ThemeProvider theme={theme}>
    <Navbar/>
    <MainRouter/>
    <Footer/>
  </ThemeProvider> 
 </Provider>
  )
}

export default App
