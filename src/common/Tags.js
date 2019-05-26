import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    ViewPropTypes,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import AppImages from '../assets/images/index';

Tags.propTypes = {
    label: PropTypes.string,

    // Callbacks
    onPress: PropTypes.func,

    // Indicate if the item is selected
    selected: PropTypes.bool,
    // Touch
    activeOpacity: PropTypes.number,
    itemStyle: ViewPropTypes.style,
    itemStyleSelected: ViewPropTypes.style,
    itemLabelStyle: PropTypes.any,
    itemLabelStyleSelected: PropTypes.any
};

Tags.defaultProps = {
    label: null,
    onPress: null,
    selected: true,
    touchComponent: 'TouchableOpacity',
    activeOpacity: 0.5,
    theme: 'inverse',
    itemStyle: null,
    itemStyleSelected: null,
    itemLabelStyle: null,
    itemLabelStyleSelected: null
};

function Tags (props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.onPress}
                activeOpacity={props.activeOpacity}
            >
                <View
                    style={[
                        styles.inner,{flexDirection:'row'},
                        styles[`${props.theme}Inner`],
                        props.itemStyle,
                        props.selected && styles[`${props.theme}InnerSelected`],
                        props.selected && props.itemStyleSelected
                    ]}
                >
                    <Text
                        numberOfLines={1}
                        style={[
                            styles[`${props.theme}LabelText`],
                            props.itemLabelStyle,
                            props.selected && styles[`${props.theme}LabelTextSelected`],
                            props.selected && props.itemLabelStyleSelected
                        ]}
                    >
                        {props.label}
                    </Text>
                    <Image source={AppImages.iconClose} resizeMethod={'cover'} style={{marginLeft:10, width:10,height:10,alignSelf:'center'}}/>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginRight: 10
    },
    inner: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 6
    },
    defaultInner: {
        backgroundColor: '#f8f9fa',
        borderColor: '#f8f9fa'
    },
    defaultInnerSelected: {
        backgroundColor: '#6c757d',
        borderColor: '#6c757d'
    },
    defaultLabelText: {
        color: '#333333'
    },
    defaultLabelTextSelected: {
        color: '#FFF'
    },
    inverseInner: {
        backgroundColor: '#FFFFFF',
        borderColor: '#343a40'
    },
    inverseInnerSelected: {
        backgroundColor: '#343a40',
        borderColor: '#343a40'
    },
    inverseLabelText: {
        color: '#343a40'
    },
    inverseLabelTextSelected: {
        color: '#FFF'
    }
});

export default Tags