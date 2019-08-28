import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    topView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'grey'
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
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    textItem1: {
        fontWeight: 'bold',
        lineHeight: 30,
        fontSize: 15,
        letterSpacing: 0.56,
        color: 'rgb(79,79,79)'
    },
    textItem2: {
        lineHeight: 20,
        fontSize: 15,
        letterSpacing: 0.56,
        color: 'rgb(79,79,79)'
    }
});


