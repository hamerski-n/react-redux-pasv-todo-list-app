import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
            {/*<App/>*/}
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
