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
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginVertical: 15
    },
    textInfo: {
        marginTop: 20,
        fontSize: 20,
        letterSpacing: 0.75,
        color: 'rgb(186,12,47)',
        fontWeight: 'bold'
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    textUnderline: {
        fontSize: 15,
        lineHeight: 25,
        color: 'rgb(186,12,47)',
        letterSpacing: 0.44,
        textDecorationLine: 'underline'
    },
    textItem1: {
        fontSize: 15,
        lineHeight: 25,
        color: 'rgb(79,79,79)',
        letterSpacing: -0.24
    },
    textInfo2: {
        fontSize: 17,
        lineHeight: 22,
        color: 'rgb(186,12,47)',
        letterSpacing: 0.5,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textItem2: {
        fontSize: 15,
        lineHeight: 25,
        color: 'rgb(0,0,0)',
        letterSpacing: -0.24,
        marginLeft: 70,
        fontWeight: 'bold'
    },
    textItem3: {
        fontSize: 15,
        lineHeight: 25,
        color: 'rgb(0,0,0)',
        letterSpacing: -0.24,
        marginLeft: 20
    }
});


