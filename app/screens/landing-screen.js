import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    GettingStarted
} from '../components';

export default class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GettingStarted />
        )
    }
}
