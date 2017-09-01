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
    }
})

export default Styles;
