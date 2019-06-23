/**
 * Connect App
 * Developed By Jadav Chirag
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';
import Header from '../common/Header';
import AppImages from '../assets/images/index';
import Styles,{smartScale} from '../assets/styles/Styles';
import Button from '../common/Button';
import {Dropdown} from 'react-native-material-dropdown';
import Hr from "../common/Hr";
import {WINDOW} from '../common/Global'


type Props = {};

export default class PersonalInfo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            location: 'Al Kharama, Dubai',
            name: '',
            employer: '',
            keyword: '',
            gender: '',
            checked: 0,
            cca2: 'US',
            callingCode: '1'
        }

    }

    render() {

        const languages = [{
            value: 'English',
        }, {
            value: 'Hindi',
        }, {
            value: 'Gujarati',
        }];

        const age = [{
            value: '35',
        }, {
            value: 'Above 20',
        }, {
            value: 'Above 50',
        }];
        const nationality = [{
            value: 'UAE',
        }, {
            value: 'India',
        }, {
            value: 'USA',
        }];


        return (
            <View style={styles.mainContainer}>
                <Header
                    onBackPress={() => {
                    }}
                    headerText={'PERSONAL INFORMATION'}
                />
                <ScrollView scrollEventThrottle={16} style={{height:(WINDOW.height - 165)}}>
                <View style={[Styles.cardStyle, {marginTop: smartScale(20)}]}>

                    <Text style={Styles.textStyle}>Name</Text>

                    <TextInput
                        style={[Styles.fontSizeH4, {fontWeight: 'normal'}]}
                        onChangeText={(text) => this.setState({name: text})}
                        value={this.state.name}
                        autoCorrect={true}
                        autoFocus={true}
                    />
                    <Hr/>

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
                    <Hr/>

                    <Text style={Styles.textStyle}>Gender</Text>

                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center'}}>

                        <TouchableOpacity style={{flex: 1}}>
                            <Image source={AppImages.iconMale}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 1}}>
                            <Image source={AppImages.iconFeMale}/>
                        </TouchableOpacity>
                    </View>

                    <Dropdown
                        label='Age'
                        data={age}
                        value={'Above 20'}
                    />

                    <Dropdown
                        label='Nationality'
                        data={nationality}
                        value={'UAE'}
                    />

                    <Dropdown
                        label='Languages'
                        data={languages}
                        value={'English'}
                        itemTextStyle={'bold'}
                    />

                    <Button title={'SUBMIT'}/>
                </View>
                </ScrollView>

            </View>
        );
    }
}
