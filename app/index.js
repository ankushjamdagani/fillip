import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './config/store.js';

import {
    LandingScreen
} from './screens';

let store = configureStore({});

const fillip = () => (
    <Provider store={store}>
        <LandingScreen />
    </Provider>
)

AppRegistry.registerComponent('fillip', () => fillip);
