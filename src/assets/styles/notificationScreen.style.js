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
    container: {
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        flex:1
    },
    navigation: {
        margin: 20,
        justifyContent: 'space-between',
        borderWidth: 1,
        flexDirection: 'row',
        width: 384,
        height: 44,
        borderRadius: 20,
        backgroundColor: 'rgba(186,12,47,0.17)'
    },
    all: {
        width: 80,
        height: 40,
        backgroundColor: 'rgb(186,12,47)',
        borderRadius: 20,
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        fontSize: 15,
        letterSpacing: 0.56,
        paddingTop: 10
    },
    textItems: {
        width: 80,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        fontSize: 15,
        letterSpacing: 0.56,
        paddingTop: 10
    },
    textItem1: {
        marginBottom: 10,
        color: 'rgb(186,12,47)',
        fontSize: 15,
        letterSpacing: 0.56,
        fontWeight: 'bold'
    },
    textItem2: {
        marginBottom: 10,
        color: 'rgb(74,74,74)',
        fontSize: 12,
        letterSpacing: 0.45
    },
    imageTime: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    textTime: {
        textAlign: 'center',
        color: 'rgb(74,74,74)',
        fontSize: 12,
        letterSpacing: 0.45
    },
    logo: {
        width: 54,
        height: 54,
        marginRight: 20
    }
});


