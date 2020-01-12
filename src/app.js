import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import { login, logout } from './actions/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import { startGetContacts } from './actions/contacts';

// Temp debug code, remove after
import axios from 'axios';
import { BASE_URL } from './constants/constants';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
       ReactDOM.render(jsx, document.getElementById('app'));
       hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
    axios.get(`${BASE_URL}/contacts`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });

    store.dispatch(login(user));
    store.dispatch(startGetContacts());
    renderApp();
    if (history.location.pathname === "/") {
        history.push("/profile");
    }
} else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
}