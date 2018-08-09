import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './Routes/routes';

export default () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}
 