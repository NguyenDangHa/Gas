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
        backgroundColor: 'rgb(255,255,255)'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 50,
        marginTop: 20,
        width: 384,
        height: 46,
        borderRadius: 25,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
    },
    input2: {
        marginTop: 20,
        width: 384,
        height: 115,
        borderRadius: 15,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgb(0,0,0)',
        marginHorizontal: 25,
    },
    btnSent: {
        width: 163,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnSent: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.58,
        fontSize: 14,
        fontWeight: 'bold',
        fontWeight: 'bold'
    },
    iconTD: {
        width: 29,
        height: 28,
        marginLeft: 5,
        position: 'absolute',
        top: 30,
        left: 37,
    },
    iconSent: {
        width: 25,
        height: 24,
        position: 'absolute',
        left: 20
    }
});


