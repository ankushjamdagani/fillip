import React from 'react';

import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    View
} from 'react-native';

class SpinLoader extends React.Component {
    constructor(props) {
        super(props);

        this.spin = this.spin.bind(this);

        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {

        const spin = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={styles.spinLoaderWrapper}>
                <Animated.Text style={[styles.spinLoader, {transform: [{rotate: spin}]}]}></Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  spinLoaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(128,0,128)',
  },
  spinLoader: {
    borderWidth: 1,
    borderColor: 'white',
    borderTopColor: 'transparent',
    borderRightColor: '#fff',
    borderBottomColor: 'transparent',
    borderLeftColor: '#fff',
    padding: 30,
    height: 50,
    width: 50
  }
});

export default SpinLoader;
