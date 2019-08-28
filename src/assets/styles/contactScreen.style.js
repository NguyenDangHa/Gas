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
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTop: {
        width: 414,
        height: 200
    },
    textContainer: {
        width: 350,
        margin: 30,
        height: 150,
        fontSize: 15,
        color: 'rgb(0,0,0)',
        lineHeight: 25,
        letterSpacing: 0.56
    },
    imageBtn: {
        width: 28,
        height: 27,
        marginLeft: 5,
        position: 'absolute',
        left: 10,
    },
    btnText: {
        width: 350,
        height: 46,
        backgroundColor: 'rgb(186,12,47)',
        borderRadius: 23,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontWeight: 'bold',
        width: 200,
        height: 20,
        color: '(rgb(255,255,255)',
        fontSize: 14,
        letterSpacing: 0.58
    },
    imageBack: {
        width: 42,
        height: 42
    }
});

