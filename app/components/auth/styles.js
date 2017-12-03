import {
    StyleSheet
} from 'react-native';

import { Colors } from '../../config/styles';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
	row: {
        // justifyContent: 'space-around'
	},
	button: {
        alignItems: 'center',
        backgroundColor: Colors.PURPLE,
        borderColor: 'black',
        borderRadius: 2,
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: '100%'
	},
    buttonText: {
        color: 'white'
    }
});

export default Styles