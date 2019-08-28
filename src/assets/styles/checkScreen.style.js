import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    bottomView: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'rgb(211,23,61)',
        justifyContent: 'space-between',
        height: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'rgb(255,255,255)',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },
    topView: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        backgroundColor:'grey',
        alignItems:'center'
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
    imageIcon: {
        width: 30,
        height: 30,
        marginLeft: 15
    },
    childrenBottomView: {
        alignItems: 'center',
        flex: 1
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
        width: 328,
        height: 46,
        borderRadius: 25,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
    },
    imageTop: {
        width: 414,
        height: 200
    },
    textContainer: {
        marginTop: 20,
        height: 60,
        width: 384,
        fontSize: 15,
        color: 'rgb(0,0,0)',
        lineHeight: 25,
        letterSpacing: 0.56
    },
    imageInput: {
        width: 23,
        height: 22,
        marginLeft: 5,
        position: 'absolute',
        top: 33,
        left: 37,
    },
    checkCode: {
        width: 328,
        height: 46,
        backgroundColor: 'rgb(186,12,47)',
        borderRadius: 23,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCheckCode: {
        width: 28,
        height: 27,
        marginLeft: 5,
        position: 'absolute',
        left: 10,
    },
    textCheckCode: {
        width: 90,
        height: 18,
        color: '(rgb(255,255,255)',
        fontSize: 14,
        letterSpacing: 0.58
    }
});

