import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,130,0)',
        justifyContent: 'center'
    },
    slideshow: {
        width: 414,
        height: 250,
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
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
        marginTop: 10,
        justifyContent: 'space-between'
    },
    topText: {
        fontWeight: 'bold',
        letterSpacing: 0.75,
        color: 'rgb(255,255,255)',
        fontSize: 20,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    notification: {
        marginRight: 15,
        width: 30,
        height: 30
    },
    textMuaHang: {
        marginLeft: 15,
        color: 'rgb(255,255,255)',
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0.73,
    },
    textGach: {
        color: 'rgb(243,243,243)',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 15,
        textAlign: 'center'
    },
    btnDatMua: {
        width: 118,
        height: 139,
        borderRadius: 10,
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDatMua: {
        fontSize: 14,
        alignItems: 'center',
        letterSpacing: 0.51,
        color: 'rgb(109,114,120)'
    },
    btnNhanHang: {
        marginLeft: 15,
        marginRight: 15,
        width: 118,
        height: 139,
        borderRadius: 10,
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNhanHang: {
        fontSize: 14,
        alignItems: 'center',
        letterSpacing: 0.51,
        color: 'rgb(109,114,120)'
    },
    btnLichSuMH: {
        width: 118,
        height: 139,
        borderRadius: 10,
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLichSuMH: {
        fontSize: 14,
        alignItems: 'center',
        letterSpacing: 0.51,
        color: 'rgb(109,114,120)'
    },
    imageIcon: {
        width: 30,
        height: 30,
        marginLeft: 15
    },
    childrenBottomView: {
        alignItems: 'center',
        flex: 1
    }
});
