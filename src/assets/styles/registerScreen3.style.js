import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    topView: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        alignItems: 'center',
        marginTop: 30
    },
    topText: {
        color: 'rgb(255,255,255)',
        fontSize: 30,
        letterSpacing: 0.75,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
    },
    notification: {
        marginRight: 15,
        width: 30,
        height: 30
    },
    imageTop: {
        width: 414,
        height: 200
    },
    imageBack: {
        width: 42,
        height: 42
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'grey',

    },
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(102,102,102,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    input: {
        marginTop: 20,
        width: 328,
        height: 46,
        borderRadius: 25,
        fontSize: 20,
        paddingLeft: 55,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
        fontSize: 14,
        letterSpacing: 0.58
    },
    btnLogin: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnLogin: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    topContainer: {
        width: '100%',
        height: 80,
        backgroundColor: 'rgb(186,12,47)',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    topText1: {
        fontSize: 20,
        color: 'rgb(255,255,255)',
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        letterSpacing: -0.48,
        lineHeight: 22
    },
    topText2: {
        fontSize: 12,
        color: 'rgb(255,255,255)',
        lineHeight: 22,
        letterSpacing: 0.5
    },
    content: {
        width: 384,
        height: 600,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    iconInput: {
        marginLeft: 5,
        position: 'absolute',
        top: 30,
        left: 37,
        width: 23,
        height: 23
    },
    contentText1: {
        color: 'rgb(186,12,47)',
        fontSize: 15,
        margin: 20,
        letterSpacing: -0.36,
        fontWeight: 'bold'
    },
    contentText2: {
        color: 'rgb(79,79,79)',
        fontSize: 15,
        letterSpacing: -0.36
    },
    checkBox: {
        flexDirection: 'row',
        marginLeft: 15
    },
    iconCheck: {
        width: 30,
        height: 30,
        marginTop: 15
    },
    textCheck: {
        marginTop: 10,
        fontSize: 12,
        lineHeight: 34,
        letterSpacing: 0.5,
        color: 'rgb(79,79,79)'
    },
    textCheck2: {
        lineHeight: 34,
        letterSpacing: 0.5,
        marginTop: 10,
        textDecorationLine: 'underline',
        color: 'rgb(186,12,47)',
        fontSize: 12,
        fontWeight:'bold'
    },
    btnYes: {
        width: 87,
        height: 46,
        borderRadius: 23,
        backgroundColor: 'rgb(186,12,47)',

        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNo: {
        width: 87,
        height: 46,
        borderRadius: 23,
        backgroundColor: 'rgba(102,102,102,0.5)',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textGiaoGa: {
        fontSize: 14,
        color: 'rgb(146,146,146)',
        marginTop: 10,
        marginLeft: 10,
        letterSpacing: 0.58
    },
    viewBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }
});
