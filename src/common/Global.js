
import {Dimensions, Platform, AsyncStorage} from 'react-native';
export const WINDOW = Dimensions.get('window');
export const deviceType = WINDOW.width < 480 ? 'phone' : 'tablet';
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const noSpace = /^\S+$/;
export const numberRegex = /^\d+$/;


export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const capitalizeFirstlatter = (string) => {
    var fullName = string.split(' ');
    return fullName[0].charAt(0).toUpperCase() + fullName[fullName.length - 1].charAt(0).toUpperCase();
};

