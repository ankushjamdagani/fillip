import {  AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './config/store.js';

import { SpinLoader } from './components';

let store = configureStore({});

const Fillip = () => (
    <Provider store={store}>
        <SpinLoader />
    </Provider>
)

AppRegistry.registerComponent('Fillip', () => Fillip);
