
import {Dimensions, Platform, AsyncStorage} from 'react-native';
export const WINDOW = Dimensions.get('window');
export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


