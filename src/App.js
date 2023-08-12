import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import history from './services/history';
import Rotas from './Routes';

// Styles
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header />
        <Rotas />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
