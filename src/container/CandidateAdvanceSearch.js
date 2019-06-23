/**
 * Connect App
 * Developed By Jadav Chirag
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import Header from '../common/Header';
import AppImages from '../assets/images/index';
import Styles ,{smartScale}from '../assets/styles/Styles';
import Button from '../common/Button';
import Hr from '../common/Hr';
import Tags from '../common/Tags';

type Props = {};
export default class CandidateAdvanceSearch extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            advanceSearchPoint: [
                {
                    key: 1,
                    title: 'Keyword Search',
                },
                {
                    key: 2,
                    title: 'Personal Information',
                },
                {
                    key: 3,
                    title: 'Experience',
                },
                {
                    key: 4,
                    title: 'Education',
                },
                {
                    key: 5,
                    title: 'Additional Information',
                },
                {
                    key: 6,
                    title: 'Target Job',
                }
            ]
        }
    }

    render() {


        const keywords = [
            {label: 'Marketing Manager'},
            {label: 'Above 20'},
            {label: 'B Tech'},
            {label: '2 + Years'},

        ];
        return (
            <View style={styles.mainContainer}>
                <Header
                    onBackPress={() => {
                    }}
                    headerText={'CANDIDATE ADVANCED SEARCH'}

                />

                <View style={[Styles.cardStyle, {flex: 1, paddingLeft: 0, paddingRight: 0}]}>

                    <FlatList
                        data={this.state.advanceSearchPoint}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <View style={{flexDirection: 'column', height: 40}}>
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
                                    <Text style={[styles.textStyle, {paddingLeft: smartScale(20),color:'#8D8D8D'}]}>{item.title}</Text>
                                    <Image
                                        resizeMode={'cover'}
                                        source={AppImages.iconRightkArrow}
                                        style={{
                                            width: 15,
                                            padding:smartScale(5),
                                            marginRight:smartScale(20),
                                            height: 15}}
                                    />
                                </TouchableOpacity>
                                <View style={{
                                    backgroundColor: Styles.lineColor,
                                    height: 1,
                                    marginTop: smartScale(3),
                                }}/>
                            </View>
                        }
                        keyExtractor={item => item.key}
                    />

                    <Text style={[Styles.textStyle,{paddingLeft:smartScale(20),color:'#8D8D8D',marginTop:smartScale(10),marginBottom:smartScale(10)}]}>Selected Search Criteria</Text>


                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginTop:10,
                            paddingLeft:20,
                            alignItems: 'flex-start'
                        }}>

                        {keywords.map((item) => {
                            return (
                                <Tags
                                    label={item.label}
                                    key={item.value}
                                />
                            )
                        })}
                    </View>

                    <Button title={'SEARCH'}/>

                </View>

            </View>
        );
    }
}
