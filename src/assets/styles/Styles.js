/**
 * @providesModule StyleConfig
 */
import {Platform} from 'react-native';
import {WINDOW, deviceType} from '../../common/Global';
const iPhoneX = (Platform.OS === 'ios' && WINDOW.height === 812);
const iPhone5 = (Platform.OS === 'ios' && WINDOW.height === 568);

const smartScale = (value) => {
    const height = Platform.OS === 'ios' ? iPhoneX ? WINDOW.height - 78 : WINDOW.height : WINDOW.height - 24;
    if (deviceType == 'phone') {
        return (value * height) / 667;
    } else {
        return (value * height) / 667;
    }
};

const screenPaddingValue = iPhoneX ? smartScale(17) : smartScale(26);

const scalarSpace = iPhoneX ? smartScale(11) : smartScale(13);

const getWidthByColumn = (column = 1) => {
    const totalPixel = WINDOW.width;
    const totalSpace = ((screenPaddingValue * 2) + (scalarSpace * (column - 1)));
    return ((totalPixel - totalSpace) / column);
};

const screenChatPaddingValue = iPhoneX ? smartScale(34) : smartScale(26);

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

    getWidthByColumn: (column = 1) => {
        return (column == 3)
            ? getWidthByColumn(2) + getWidthByColumn(4) + scalarSpace
            : getWidthByColumn(column);
    },
    isiPhoneX: iPhoneX,
    isiPhone5: iPhone5,
    screenPaddingValue: smartScale(16),
    scalarSpace: scalarSpace,
    getScreenPadding: screenPaddingValue,
    getscreenChatPaddingValue: screenChatPaddingValue,
    headerHeight: Platform.OS === 'ios' ? iPhoneX ? smartScale(87) : smartScale(65) : smartScale(45),
    appBackground: '#ffffff',
    inputBorderGray: '#465575',
    inputFillGrayOne: 'rgba(53, 61, 88,0.5)',
    inputFillGray: 'rgba(255, 255, 255,0.08)',
    yellowColor: '#D9B020',
    inputLabelColor: '#A4B4D8',
    modalOverlay: 'rgba(0, 0, 0, 0.4)',
    inputTextGray: '#AFAFAF',
    darkCyan: '#28464a',
    white: '#ffffff',
    disableGray: '#838076',
    errorTextColor: '#ffffff',
    buttonHeight: smartScale(42),
    footerButtonHeight: smartScale(60),
    buttonTextSize: smartScale((deviceType == 'phone') ? 15 : 18),
    modalHeaderTextSize: smartScale((deviceType == 'phone') ? 20 : 26),
    modalHeaderTextColor: '#081F4C',
    selectedDateBackgroundColor: '#00a2f1',
    modalDetailTextSize: smartScale((deviceType == 'phone') ? 13 : 15),
    modalDetailTextColor: '#333333',
    itemDimension: (WINDOW.width - smartScale(40)) / 2,
    tabIconActive: '#B4931C',
    tabIconInActive: '#1E1E1E',
    isIphone: Platform.OS === 'ios',
    headerBackground: '#CA320C',
    buttonBackground: '#081F4C',
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
