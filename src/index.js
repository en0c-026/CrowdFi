import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { ArConnectProvider } from './providers/ArConnectProvider';
import { ArweaveProvider } from './providers/ArweaveProvider';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
    <ArweaveProvider>
      <ArConnectProvider>
        <App />
      </ArConnectProvider>
    </ArweaveProvider>
  </Provider>,
  document.getElementById('root')
)
