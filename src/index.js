import React from 'react';
import App from './app/App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import store from './app/store';
import ScrollToTop from './app/ScrollToTop';
import { config as i18nextConfig } from './translations/index';
import { unregister } from './registerServiceWorker';

i18next.init(i18nextConfig);

unregister();

render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <I18nextProvider i18n={i18next}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </I18nextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
