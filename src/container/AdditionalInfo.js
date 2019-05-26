/**
 * Connect App
 * Developed By Jadav Chirag
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Header from '../common/Header';
import AppImages from '../assets/images/index';
import Styles from '../assets/styles/Styles';
import Button from '../common/Button';
import {Dropdown} from 'react-native-material-dropdown';


type Props = {};
export default class AdditionalInfo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {updateLastDate: 'Updated in last 30 days'}
    }

    render() {
        const lastUpdated = [{
            value: 'Updated in last 30 days',
        }, {
            value: 'Updated in last 20 days',
        }, {
            value: 'Updated in last 10 days',
        }];

        const targetJob = [{
            value: 'Marketing Manager',
        }, {
            value: 'Software Engineer',
        }, {
            value: 'QA',
        }];
        return (
            <View style={styles.mainContainer}>
                <Header
                    onBackPress={() => {
                    }}
                    headerText={'ADDITIONAL INFORMATION'}

                />

                <View style={[Styles.cardStyle, {marginTop: 50}]}>

                    <Dropdown
                        label='CV Freshness'
                        data={lastUpdated}
                        value={'Updated in last 30 days'}
                    />
                    <Text style={Styles.textStyle}>Select Custom Date</Text>
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center'}}>
                        <View style={{flexDirection: 'column', flex: 1, marginRight: 5, justifyContent: 'center'}}>
                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>

                                <Text style={[Styles.fontSizeH4, {fontWeight: 'bold'}]}>From</Text>
                                <Image
                                    resizeMode={'cover'}
                                    source={AppImages.iconCalendar}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />


                            </TouchableOpacity>

                            <View style={{
                                backgroundColor: Styles.lineColor,
                                height: 1,
                                margin: 2,
                                justifyContent: 'flex-end'
                            }}/>
                        </View>

                        <View style={{flexDirection: 'column', flex: 1, marginLeft: 5, justifyContent: 'center'}}>
                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>

                                <Text style={[Styles.fontSizeH4, {fontWeight: 'bold'}]}>To</Text>
                                <Image
                                    resizeMode={'cover'}
                                    source={AppImages.iconCalendar}
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />


                            </TouchableOpacity>

                            <View style={{
                                backgroundColor: Styles.lineColor,
                                height: 1,
                                margin: 2,
                                justifyContent: 'flex-end'
                            }}/>
                        </View>
                    </View>
                    <Dropdown
                        label='Target Job'
                        data={targetJob}
                        value={'Marketing Manager'}
                    />

                    <Button title={'SUBMIT'}/>

                </View>


            </View>
        );
    }
}
