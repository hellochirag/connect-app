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
import Styles from '../assets/styles/Styles';
import Button from '../common/Button';
import {Dropdown} from 'react-native-material-dropdown';
import Hr from "../common/Hr";


type Props = {};
export default class Experience extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            location: 'Al Kharama, Dubai',
            jobTitle: '',
            employer:'',
            keyword:''
        }
    }

    render() {
        const yearOfExp = [{
            value: 'Above 20',
        }, {
            value: '5-10 Years',
        }, {
            value: '2-5 Years',
        }];
        const role = [{
            value: 'Marketing Manager',
        }, {
            value: 'Software Engineer',
        }, {
            value: 'QA',
        }];

        const industry= [{
            value: 'IT',
        }, {
            value: 'Engineering',
        }, {
            value: 'Office Work',
        }];

        return (
            <View style={styles.mainContainer}>
                <Header
                    onBackPress={() => {
                    }}
                    headerText={'EXPERIENCE'}
                />

                <View style={[Styles.cardStyle, {marginTop: 30}]}>

                    <Text style={Styles.textStyle}>Job Title</Text>

                    <TextInput
                        style={[Styles.fontSizeH4, {fontWeight: 'normal'}]}
                        onChangeText={(text) => this.setState({jobTitle: text})}
                        value={this.state.jobTitle}
                        autoCorrect={true}
                        autoFocus={true}
                    />
                    <Hr/>

                    <Dropdown
                        label='Years of Experience'
                        data={yearOfExp}
                        value={'Above 20'}
                    />
                    <Text style={Styles.textStyle}>Employer</Text>

                    <TextInput
                        style={[Styles.fontSizeH4, {fontWeight: 'normal'}]}
                        onChangeText={(text) => this.setState({employer: text})}
                        value={this.state.employer}
                        autoCorrect={true}
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

                    <Dropdown
                        label='Role'
                        data={role}
                        value={'Marketing Manager'}
                    />

                    <Dropdown
                        label='Industry'
                        data={industry}
                        value={'IT'}
                    />

                    <Text style={Styles.textStyle}>Keyword</Text>

                    <TextInput
                        style={[Styles.fontSizeH4, {fontWeight: 'normal'}]}
                        onChangeText={(text) => this.setState({keyword: text})}
                        value={this.state.keyword}
                        autoCorrect={true}
                    />
                    <Hr/>


                    <Button title={'SUBMIT'}/>
                </View>


            </View>
        );
    }
}
