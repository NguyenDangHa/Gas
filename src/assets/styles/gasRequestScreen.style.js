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
        alignItems: 'center'
    },
    topText: {
        color: 'rgb(255,255,255)',
        fontSize: 20,
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
    imageBack: {
        width: 42,
        height: 42
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    btnCreate: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(248,201,210)'
    },
    textBtnCreate: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.58,
        fontSize: 14,
        fontWeight: 'bold'
    },
    imageTop: {
        width: 414,
        height: 200
    },
    textItem1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    imageTime: {
        width: 20,
        height: 19,
        marginRight: 10
    },
    textTime: {
        fontSize: 12,
        letterSpacing: 0.45,
        color: 'rgb(74,74,74)',
        width: 80,
        height: 17
    },
    textItem2: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRequest: {
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0.75,
        color: 'rgb(186,12,47)',
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    textNhaHang: {
        fontSize: 15,
        lineHeight: 28,
        letterSpacing: 0.56,
        color: 'rgb(0,0,0)',
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    textItem3: {
        width: 380,
        height: 144,
        marginTop: 30,
        marginLeft: 15,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        fontSize: 15,
        letterSpacing: 0.56,
        color: 'rgb(0,0,0)'
    },
    btnBottom: {
        alignItems: 'center',
        paddingTop: 70,
        paddingBottom: 40
    }
});


