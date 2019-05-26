/**
 * @providesModule App
 */
import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import MainContainerStyle from './assets/styles/MainContainerStyle';
import Routers from './Routers';

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={MainContainerStyle.container}>
                <StatusBar barStyle="light-content" />
                <Routers/>
            </View>
        );
    }
}
