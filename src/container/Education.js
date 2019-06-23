/**
 * Connect App
 * Developed By Jadav Chirag
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';
import Header from '../common/Header';
import AppImages from '../assets/images/index';
import Styles,{smartScale} from '../assets/styles/Styles';
import Button from '../common/Button';
import {Dropdown} from 'react-native-material-dropdown';


type Props = {};
export default class Education extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            location: 'Al Kharama, Dubai'
        }
    }

    render() {
        const degree = [{
            value: 'Master of Computer Application',
        }, {
            value: 'B.com Tax',
        }, {
            value: 'BCA',
        }];


        return (
            <View style={styles.mainContainer}>
                <Header
                    onBackPress={() => {
                    }}
                    headerText={'EDUCATION'}

                />

                <View style={[Styles.cardStyle, {marginTop: smartScale(30)}]}>

                    <Dropdown
                        label='Degree'
                        data={degree}
                        value={'B.com Tax'}
                    />
                    <Text style={Styles.textStyle}>Location</Text>
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center'}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>

                            <TextInput
                                style={[Styles.fontSizeH4, {fontWeight: 'bold'}]}
                                onChangeText={(text) => this.setState({location: text})}
                                value={this.state.location}
                                autoCorrect={true}
                                autoFocus={true}
                            />
                            <Image
                                resizeMode={'contain'}
                                source={AppImages.iconLocation}
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />

                        </View>

                    </View>
                    <View style={{
                        backgroundColor: Styles.lineColor,
                        height: 1,
                        margin: 2,
                        justifyContent: 'flex-end'
                    }}/>
                    <Button title={'SUBMIT'}/>
                </View>


            </View>
        );
    }
}
