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
    btnEditPass: {
        width: 195,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnEditPass: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.58,
        fontSize: 14,
        fontWeight: 'bold'
    },
    btnClose: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnClose: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.56,
        fontWeight: 'bold'
    },
    modal: {
        marginTop: 200,
        height: 300,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageTop: {
        width: 414,
        height: 200
    },
    textImage: {
        width: 23,
        height: 22,
        marginLeft: 5,
        position: 'absolute',
        top: 33,
        left: 37
    },
    btnBottom: {
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 40
    },
    modelContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalImage: {
        width: 110,
        height: 110,
        justifyContent: 'center',
        borderRadius: 60,
        marginBottom: 20
    },
    modalText: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1,
        color: 'rgb(0,0,0)',
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20
    },
    modalBtn: {
        alignItems: 'center',
        marginTop: 20
    }
});


