/**
 * @providesModule StyleConfig
 */
import {Platform} from 'react-native';
import {WINDOW, deviceType} from '../../common/Global';
const iPhoneX = (Platform.OS === 'ios' && WINDOW.height === 812);
const iPhone5 = (Platform.OS === 'ios' && WINDOW.height === 568);

export const smartScale = (value) => {
    const height = Platform.OS === 'ios' ? iPhoneX ? WINDOW.height - 78 : WINDOW.height : WINDOW.height - 24;
    if (deviceType == 'phone') {
        return (value * height) / 667;
    } else {
        return (value * height) / 667;
    }
};


const getWidthByColumn = (column = 1) => {
    const totalPixel = WINDOW.width;
    const totalSpace = ((screenPaddingValue * 2) + (scalarSpace * (column - 1)));
    return ((totalPixel - totalSpace) / column);
};


export default {
    countPixelRatio: (defaultValue) => {
        return smartScale(defaultValue);
    },
    muliRegular: 'arial',
    muliBlack: 'arial',
    muliBold: 'arial',
    muliExtraBold: 'arial',
    muliExtraLight: 'arial',
    muliItalic: 'arial',
    muliLight: 'arial',
    muliSemiBold: 'arial',
    fontSizeH1: smartScale((deviceType == 'phone') ? 26 : 36),
    fontSizeH2: smartScale((deviceType == 'phone') ? 20 : 26),
    fontSizeH2_3: smartScale((deviceType == 'phone') ? 18 : 22),
    fontSizeH3: smartScale((deviceType == 'phone') ? 15 : 18),
    fontSizeH4: smartScale((deviceType == 'phone') ? 10 : 12),
    fontSizeParagraph: smartScale((deviceType == 'phone') ? 13 : 15),
    isiPhoneX: iPhoneX,
    isiPhone5: iPhone5,
    screenPaddingValue: smartScale(16),

    headerHeight: Platform.OS === 'ios' ? iPhoneX ? smartScale(87) : smartScale(65) : smartScale(45),
    appBackground: '#ffffff',
    isIphone: Platform.OS === 'ios',
    headerBackground: '#CA320C',
    buttonBackground: '#081F4C',
    white: '#ffffff',
    lineColor:'#D1D1D1',
    cardStyle: {
        backgroundColor: "#fff",
        borderRadius: 26,
        shadowColor: "#3A676F",
        shadowOpacity: 1.0,
        padding:smartScale(20),
        marginLeft: smartScale(16),
        marginTop: smartScale(16),
        marginRight: smartScale(16),
        borderWidth: 0.5,
        borderColor: "rgba(58,103,111,0.5)",
        shadowRadius: 5,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: Platform.OS === 'ios' ? 5 : 10,
    },
    textStyle :{
        color:'#8D8D8D',
        fontFamily :'arial',
        fontSize: smartScale((deviceType == 'phone') ? 13 : 15),
        marginTop:smartScale(5),
        marginBottom:smartScale(5)
    },
    buttonStyle :
        {
            height: smartScale(45),
            backgroundColor: "#051F25",
            borderRadius: 16,
            shadowColor: "#3A676F",
            shadowOpacity: 1.0,
            flexDirection: 'row',
            marginLeft: smartScale(10),
            marginTop: smartScale(16),
            marginRight: smartScale(10),
            borderWidth: 0.5,
            borderColor: "rgba(58,103,111,0.5)",
            shadowRadius: 5,
            shadowOffset: {
                height: 2,
                width: 0,
            },
            elevation: Platform.OS === 'ios' ? 5 : 10,
        }

}
