import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom'; 
import { store, persistor } from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <GlobalStyle />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    )
}