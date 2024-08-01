import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store = {store}>

      <BrowserRouter>
          <App/>
      </BrowserRouter>

    </Provider>

  </React.StrictMode>,
)
