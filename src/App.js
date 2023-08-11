import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import Rotas from './Routes';

// Styles
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter history={history}>
      <Header />
      <Rotas />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
