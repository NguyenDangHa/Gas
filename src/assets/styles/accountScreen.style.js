import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'grey'
    },
    container: {
        width: 384,
        height: 540,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 15,
        borderColor: 'rgba(0,0,0,0.5)',
        margin: 10,
    },
    topView: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    topText: {
        color: 'rgb(255,255,255)',
        fontSize: 20,
        letterSpacing: 0.75,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
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
    childrenBottomView: {
        alignItems: 'center',
        flex: 1
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
        color: 'rgb(151,151,151)',
        marginLeft: 10,
        marginRight: 15
    },
    btnDatMua: {
        width: 110,
        height: 130,
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
        width: 110,
        height: 130,
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
        width: 110,
        height: 130,
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
    },
    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    textName: {
        fontSize: 20,
        letterSpacing: 0.75,
        color: 'rgb(255,130,0)'
    },
    textPhone: {
        fontSize: 15,
        letterSpacing: 0.56,
        color: 'rgb(74,74,74)'
    },
    textInter: {
        fontSize: 15,
        letterSpacing: 0.56,
        color: 'rgb(186,12,47)'
    },
    childrenItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 364
    },
    iconImage: {
        width: 30,
        height: 33,
        borderRadius: 10,
        marginTop: 5
    },
    textItem: {
        marginTop: 5,
        marginLeft: 20,
        fontSize: 17,
        letterSpacing: 0.85,
        color: 'rgb(74,74,74)',
        width: 185,
        height: 25
    },
    imageItem: {
        marginTop: 5,
        width: 12,
        height: 24,
        marginLeft: 110
    },
    imageBack: {
        width: 42,
        height: 42
    }
});

