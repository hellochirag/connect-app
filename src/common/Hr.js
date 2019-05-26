import React, {Component} from 'react';
import {View} from 'react-native';
import StyleConfig from '../assets/styles/Styles';

class Hr extends Component {

    render() {
        return (
            <View style={{
                backgroundColor: StyleConfig.lineColor,
                height: 1,
                margin: 2
            }}/>
        );
    }
}

export default Hr;