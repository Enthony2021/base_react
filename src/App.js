import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import history from './services/history';

import Rotas from './Routes';

// Styles
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter history={history} >
      <GlobalStyles />
        <Header />
        <Rotas />
    </BrowserRouter>
  );
}

export default App;
