import {
    StyleSheet
} from 'react-native';

import { Colors } from '../../config/styles';

const Styles = StyleSheet.create({
    containerWrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    containerText: {
        color: Colors.PINK,
        fontSize: 68
    },
    sliderControls: {
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        position: 'absolute',
        width: '100%'
    },
    sliderControl: {
        backgroundColor: Colors.BLUE,
        padding: 3,
        width: 40,
        margin: 10
    },
    gettingStartedHead: {
        flex: 5
    },
    gettingStartedOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: Colors.PURPLE,
        margin: 'auto'
    },
    gettingStartedControls: {
        alignSelf: 'center',
        padding: 10,
        flex: 1
    },
    gettingStartedControl: {
        backgroundColor: Colors.PURPLE,
        borderColor: 'black',
        borderRadius: 2,
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1,
        color: 'white'
    }
})

export default Styles;
