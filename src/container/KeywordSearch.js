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
import Hr from '../common/Hr';
import RadioForm from 'react-native-simple-radio-button';
import Tags from '../common/Tags';


type Props = {};
export default class KeywordSearch extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    render() {
        const radioGroup = [
            {label: 'All Words', value: 0},
            {label: 'Exact Order', value: 1},
            {label: 'Any Word', value: 2}
        ];


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
                    headerText={'KEYWORD SEARCH'}
                />

                <View style={[Styles.cardStyle, {marginTop: 30}]}>


                    <RadioForm
                        radio_props={radioGroup}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={true}
                        animation={true}
                        buttonColor={'#D1D1D1'}
                        buttonSize={10}
                        selectedButtonColor={'red'}
                        labelStyle={{fontSize: 12, color: '#000000', marginRight: 10}}
                        buttonOuterSize={20}
                        onPress={(value) => {
                            this.setState({value: value})
                        }}
                    />
                    <Hr/>
                    <Text style={[Styles.textStyle, {marginTop: 10}]}>Keyword</Text>

                    <TextInput
                        style={[Styles.fontSizeH4, {fontWeight: 'normal'}]}
                        onChangeText={(text) => this.setState({keyword: text})}
                        value={this.state.keyword}
                        autoCorrect={true}
                    />
                    <Hr/>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginTop:10,
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
