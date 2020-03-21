import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const Application = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(Application, document.getElementById('root'));

serviceWorker.unregister();
