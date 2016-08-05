import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const seed = document.getElementById('seed');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  seed
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      seed
    );
  });
}
