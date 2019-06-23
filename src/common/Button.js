import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StyleConfig from '../assets/styles/Styles';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <TouchableOpacity style={StyleConfig.buttonStyle}>
                <Text style={[styles.title, {fontWeight: 'bold'}]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        flex: 1,
        textAlign: 'center',
        fontFamily: StyleConfig.muliBlack,
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.white
    }
});
export default Button;