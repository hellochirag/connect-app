/**
 * @providesModule Routers
 */
import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import StyleConfig from './assets/styles/Styles';
import { Router, Scene, Tabs, ActionConst, Stack, Actions } from 'react-native-router-flux';


import AdditionalInfo from './container/AdditionalInfo'
import EducationScreen from './container/Education';
import ExperienceScreen from './container/Experience';
import TargetJob from './container/TargetJob';
import PersonalInfo from './container/PersonalInfo';
import KeywordSearch from './container/KeywordSearch';
import CandidateAdvanceSearch from './container/CandidateAdvanceSearch';

class Routers extends Component {
    constructor(props) {
        super(props);
    }

    _routeScreens() {
        return (
            <Scene key="root">
                <Scene type={ActionConst.REPLACE} key="AddInfo" component={AdditionalInfo} hideNavBar={true} panHandlers={null} initial={false} />
                <Scene type={ActionConst.REPLACE} key="Education" component={EducationScreen} hideNavBar={true} panHandlers={null} initial={false} />
                <Scene type={ActionConst.REPLACE} key="AdvanceSearch" component={CandidateAdvanceSearch} hideNavBar={true} panHandlers={null} initial={false} />
                <Scene type={ActionConst.REPLACE} key="Experience" component={ExperienceScreen} hideNavBar={true} panHandlers={null} initial={false} />
                <Scene type={ActionConst.REPLACE} key="TargetJob" component={TargetJob} hideNavBar={true} panHandlers={null} initial={false} />
                <Scene type={ActionConst.REPLACE} key="PersonalInfo" component={PersonalInfo} hideNavBar={true} panHandlers={null} initial={true} />
                <Scene type={ActionConst.REPLACE} key="KeywordSearch" component={KeywordSearch} hideNavBar={true} panHandlers={null} initial={false} />
            </Scene>
        )
    }

    render() {
        return (
            <Router>
                {this._routeScreens()}
            </Router>
        )
    }
}

export default Routers;