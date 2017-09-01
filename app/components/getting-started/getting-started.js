import React from 'react';
import {
    ViewPagerAndroid,
    Text,
    View,
    Animated,
    Easing
} from 'react-native';

import { Colors } from '../../config/styles';
import Styles from './styles';

export default class GettingStarted extends React.Component {
    constructor(props) {
        super(props);

        this.translateValue = new Animated.Value(0);
        this.changePage  = this.changePage.bind(this);
        this.hideSliderControls  = this.hideSliderControls.bind(this);
    }

    hideSliderControls(up) {
        Animated.spring(
            this.translateValue,
            {
                toValue: up ? 1 : 0,
                duration: 2000,
                easing: Easing.linear
            }
        ).start();
    }

    changePage(e) {
        if(e.nativeEvent.position === 3) {
            this.translateValue.setValue(0);
            this.hideSliderControls(true);
        } else {
            this.translateValue.setValue(1);
            this.hideSliderControls(false);
        }
    }

    render() {
        const sliderPosition = this.translateValue.interpolate({
            inputRange: [0, .1, 1],
            outputRange: [0, 10, -40]
        })
        return (
            <View style={Styles.containerWrapper}>
                <ViewPagerAndroid style={Styles.containerWrapper} onPageSelected={this.changePage}>
                    <View style={[Styles.container, {backgroundColor: Colors.BLUE }]}>
                        <Text style={Styles.containerText}>
                            Scan
                        </Text>
                    </View>
                    <View style={[Styles.container, {backgroundColor: Colors.PINK }]}>
                        <Text style={Styles.containerText}>
                            Pay
                        </Text>
                    </View>
                    <View style={[Styles.container, {backgroundColor: Colors.PURPLE }]}>
                        <Text style={Styles.containerText}>
                            Go
                        </Text>
                    </View>
                    <View style={[Styles.container]}>
                        <Text>
                            Rummy
                        </Text>
                    </View>
                </ViewPagerAndroid>
                <Animated.View style={[Styles.sliderControls, {bottom: sliderPosition}]}>
                    <View style={Styles.sliderControl}></View>
                    <View style={[Styles.sliderControl, {backgroundColor: 'white'}]}></View>
                    <View style={Styles.sliderControl}></View>
                </Animated.View>
            </View>
        )
    }
}
