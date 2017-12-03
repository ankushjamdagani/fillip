import React from 'react';
import {
    Text,
    View,
    Image,
    Animated,
    Easing
} from 'react-native';

import { Colors } from '../../config/styles';
import Styles from './styles';

import IMAGES from '../../config/images.js';
console.log(IMAGES);

class Auth extends React.Component {

	render() {
		return <View style={ [ Styles.row, Styles.container ] }>
		    <Image
		        style={ [ Styles.row ] }
		        source={ IMAGES._CART }
		        resizeMode="contain"
		    />
		    
		    <View style={ [ Styles.button ] }>
				<Text style={ [ Styles.buttonText ] }>Sign In</Text>
		    </View>

			<Text style={ [ { color: '#999999' } ] }>Or</Text>
		    
		    <View style={ [ Styles.button ] }>
				<Text style={ [ Styles.buttonText ] }>Sign Up...</Text>
		    </View>
		</View>
	}
}

export default Auth;