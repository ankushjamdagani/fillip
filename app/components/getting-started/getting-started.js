import React from 'react';
import {
    ViewPagerAndroid,
    Text,
    View,
    Image,
    Animated,
    Easing
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import { Colors } from '../../config/styles';
import Styles from './styles';

import {
    Auth
} from '../../components';

export default class GettingStarted extends React.Component {
    constructor(props) {
        super(props);

        this.translateValue = new Animated.Value(1);
        this.overlayValue = new Animated.Value(0);
        this.changePage  = this.changePage.bind(this);
        this.hideSliderControls  = this.hideSliderControls.bind(this);
        this.overlayAnim  = this.overlayAnim.bind(this);

        this.state = {
            activeSlide: 0
        }
    }

    componentDidMount() {
        // this.hideSliderControls(true);
    }

    hideSliderControls(hide) {
        this.translateValue.setValue((hide ? 0 : 1));
        Animated.spring(
            this.translateValue,
            {
                toValue: (hide ? 1 : 0),
                duration: 2000,
                easing: Easing.linear
            }
        ).start();
    }

    overlayAnim() {
        this.overlayValue.setValue(0);
        Animated.timing(
            this.overlayValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(this.overlayAnim)
    }

    changePage(e) {
        if(e.nativeEvent.position === 4 || e.nativeEvent.position === 0) {
            this.hideSliderControls(true);

            if(e.nativeEvent.position === 4)
                this.overlayAnim();
        } else {
            this.setState({
                activeSlide: e.nativeEvent.position
            });

            if(this.translateValue._value > .5)
                this.hideSliderControls(false);
        }
    }

    render() {
        const sliderPosition = this.translateValue.interpolate({
            inputRange: [0, .1, 1],
            outputRange: [0, 10, -40]
        });

        const horizPadding = this.overlayValue.interpolate({
            inputRange: [0, .5, 1],
            outputRange: [10, 11, 10]
        })

        const vertPadding = this.overlayValue.interpolate({
            inputRange: [0, .5, 1],
            outputRange: [98, 100, 98]
        })
        return (
            <View style={Styles.containerWrapper}>
                <ViewPagerAndroid style={Styles.containerWrapper} onPageSelected={this.changePage}>
                    <View style={[Styles.container, {backgroundColor: Colors.PURPLE }]}>
                        <Text style={[Styles.containerText, {color: 'rgba(255,255,255,.8)'}]}>
                            Fillip
                        </Text>
                    </View>
                    <View style={Styles.container}>
                        <Text style={Styles.containerText}>
                            ...Scan
                        </Text>
                    </View>
                    <View style={Styles.container}>
                        <Text style={Styles.containerText}>
                            ...Pay...
                        </Text>
                    </View>
                    <View style={Styles.container}>
                        <Text style={Styles.containerText}>
                            Go...
                        </Text>
                    </View>
                    <View style={[Styles.container]}>
                        <Animated.View style={[
                            Styles.gettingStartedOverlay,
                            {
                                width: 0
                            }
                        ]}></Animated.View>
                        <View style={ [ Styles.gettingStartedHead, { width: '65%', alignSelf: 'center' } ] }>
                            <FontAwesome>{Icons.chevronDown}</FontAwesome>
                            {/* ------- Auth Component --------- */}
                            <Auth />
                        </View>
                        <View style={Styles.gettingStartedControls}>
                            <Animated.Text style={[Styles.gettingStartedControl, {
                                paddingVertical: horizPadding,
                                paddingHorizontal: vertPadding,
                            }]}>
                                Get Started
                            </Animated.Text>
                        </View>
                    </View>
                </ViewPagerAndroid>
                <Animated.View style={[Styles.sliderControls, {bottom: sliderPosition}]}>
                    <View style={[
                        Styles.sliderControl,
                        (this.state.activeSlide === 1 ? {backgroundColor: Colors.PINK} : null)
                    ]}></View>
                    <View style={[
                        Styles.sliderControl,
                        (this.state.activeSlide === 2 ? {backgroundColor: Colors.PINK} : null)
                    ]}></View>
                    <View style={[
                        Styles.sliderControl,
                        (this.state.activeSlide === 3 ? {backgroundColor: Colors.PINK} : null)
                    ]}></View>
                </Animated.View>
            </View>
        )
    }
}
