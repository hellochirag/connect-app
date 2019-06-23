import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Platform} from 'react-native';
import StyleConfig from '../assets/styles/Styles';
import AppImages from '../assets/images/index';

const windowSize = Dimensions.get('window');

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground
                source={AppImages.imageHeader}
                style={{
                    flex: 1,
                    width: null,
                    height: Platform.OS === 'ios' ? 150 : 144
                }}
            >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.props.onBackPress} style={styles.headerLeft}>
                        <Image resizeMode={'contain'} style={styles.leftIcon} source={AppImages.iconBackArrow}/>
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, this.props.headerTitle]}>{this.props.headerText}</Text>
                </View>

            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({


    headerTitle: {
        fontFamily: StyleConfig.muliBlack,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.white,
        flex: 1,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingRight:20
    }, headerLeft: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20

    },
    leftIcon: {
        width: StyleConfig.countPixelRatio(18),
        height: StyleConfig.countPixelRatio(18),
    }

});
export default Header;