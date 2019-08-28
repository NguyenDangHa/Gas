import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
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
        margin: 13,
        flex: 1
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
    btnForget: {
        width: '48%',
        justifyContent: 'center',
        color: 'rgb(255,130,0)',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    btnRegister: {
        width: '48%',
        justifyContent: 'center',
        color: 'rgb(255,130,0)',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    textBottom: {
        color: 'rgb(255,130,0)',
        marginLeft: 10
    },
    appName: {
        color: 'rgb(255,255,255)',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
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
        height: 580,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
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
    iconInput: {
        marginLeft: 5,
        position: 'absolute',
        top: 30,
        left: 37,
        width: 32,
        height: 28
    },
    btnContinue: {
        alignItems: 'center',
        marginTop: 50
    },
    btnBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    btnUnder:{
        margin: 3,
        width:20,
        height:20
    }
});
