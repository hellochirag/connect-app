/**
 * @providesModule MainContainerStyle
 */
import {StyleSheet, Dimensions} from 'react-native';
var windowSize = Dimensions.get('window');

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'absolute',
        right: 0,
        left: 0,
        width: windowSize.width,
        zIndex: 9999
    },
    container: {
        flex: 1
    },
})
