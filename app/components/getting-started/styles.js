import {
    StyleSheet
} from 'react-native';

const Styles = StyleSheet.create({
    containerWrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText: {
        color: 'white',
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
        backgroundColor: 'rgba(255,255,255,.5)',
        padding: 3,
        width: 40,
        margin: 10
    },
    gettingStartedHead: {
        flex: 3
    },
    gettingStartedControls: {
        flex: 1
    },
    gettingStartedControl: {
        backgroundColor: '#333',
        borderColor: '#111',
        borderRaddius: 10,
        borderWidth: 2,
        color: 'white',
        fontSize: 18,
        padding: 10
    }
})

export default Styles;
