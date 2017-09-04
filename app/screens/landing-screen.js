import React from 'react';
import {
    View,
    Text
} from 'react-native';

import {ScanAndOrder} from '../components';

import {
    GettingStarted
} from '../components';

export default class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <GettingStarted />
                <ScanAndOrder />
            </View>
        )
    }
}
