import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import reportWebVitals from './reportWebVitals.jsx';
import {Provider} from 'react-redux';
import {store} from './store.jsx';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
