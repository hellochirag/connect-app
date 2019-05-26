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
export default class TargetJob extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            targetJobLocation: 'Al Kharama, Dubai',
            targetJobTitle: '',
            employer: '',
            keyword: ''
        }
    }

    render() {
        const monthlySalary = [{
            value: '< 10,0000',
        }, {
            value: '10,0000-20,0000',
        }, {
            value:'1,00,0000',
        }];
        const role = [{
            value: 'Marketing Manager',
        }, {
            value: 'Software Engineer',
        }, {
            value: 'QA',
        }];

        const industry = [{
            value: 'IT',
        }, {
            value: 'Engineering',
        }, {
            value: 'Office Work',
        }];
        const noticePeriod = [{
            value: '1 Month',
        }, {
            value: '2 Month',
        }, {
            value: 'immediate',
        }];
        const employmentType = [{
            value: 'Working',
        }, {
            value: 'On Notice Period',
        }, {
            value: 'Freelancer',
        }];
        const employmentStatus = [{
            value: 'Permanent',
        }, {
            value: 'Part Time',
        }, {
            value: 'Freelancer',
        }];

        return (
            <View style={styles.mainContainer}>
                <Header
                    onBackPress={() => {
                    }}
                    headerText={'TARGET JOB'}
                />

                <View style={[Styles.cardStyle, {marginTop: 20}]}>

                    <Text style={Styles.textStyle}>Target JobLocation</Text>
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center'}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>

                            <TextInput
                                style={[Styles.fontSizeH4, {fontWeight: 'bold'}]}
                                onChangeText={(text) => this.setState({targetJobLocation: text})}
                                value={this.state.targetJobLocation}
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

                    <Text style={Styles.textStyle}>Target Job Title</Text>

                    <TextInput
                        style={[Styles.fontSizeH4, {fontWeight: 'normal'}]}
                        onChangeText={(text) => this.setState({targetJobTitle: text})}
                        value={this.state.targetJobTitle}
                        autoCorrect={true}
                        autoFocus={true}
                    />
                    <Hr/>

                    <Dropdown
                        label='Target Industry'
                        data={industry}
                        value={'IT'}
                    />


                    <Dropdown
                        label='Monthly Salary Range'
                        data={monthlySalary}
                        value={'< 10,000'}
                    />

                    <Dropdown
                        label='Notice Period'
                        data={noticePeriod}
                        value={' '}
                    />
                    <Dropdown
                        label='Employment Type'
                        data={employmentType}
                        value={'Working'}
                    />

                    <Dropdown
                        label='Employment Status'
                        data={employmentStatus}
                        value={'Permanent'}
                    />

                    <Button title={'SUBMIT'}/>
                </View>


            </View>
        );
    }
}
