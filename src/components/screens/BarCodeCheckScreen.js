import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import ImageKetQua from '../../images/ImageKqua.png';
import { Actions } from 'react-native-router-flux';

class BarCodeCheckScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.check()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Kiểm tra xuất xứ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={{ marginRight: 10,width:30,height:30 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <Image style={{ width: 414, height: 200 }} source={ImageKetQua} />                
                    <View style={styles.container}>
                        <Text style={{fontSize:15,letterSpacing:0.56,color:'rgb(79,79,79)',marginTop:10}}>Mã bình</Text>
                        <Text style={{fontSize:20,letterSpacing:0.75,color:'rgb(186,12,47)',fontWeight:'bold'}}>P12345606</Text>
                        <Text style={{fontSize:15,letterSpacing:0.56,color:'rgb(79,79,79)',fontWeight:'bold'}}>Hàng chính hãng</Text>
                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)',marginLeft:20 }}>
                                ______________________________________________________________</Text>
                    </View>

                    <View style={{marginTop:20,marginLeft:20,marginVertical:15}}>
                        <Text style={{fontSize:17,lineHeight:22,color:'rgb(186,12,47)',letterSpacing:0.5,fontWeight:'bold',marginBottom:10}}>Thông tin sản xuất</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Ngày sản{'\n'} xuất :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:50}}>20/05/2019</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Nơi sản xuất :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:20}}>Trạm PM Gas Điện Ngọc</Text>
                        </View>
                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                ______________________________________________________________</Text>
                    </View>

                    <View style={{marginTop:10,marginLeft:20,marginVertical:15}}>
                        <Text style={{fontSize:17,lineHeight:22,color:'rgb(186,12,47)',letterSpacing:0.5,fontWeight:'bold',marginBottom:10}}>Thông tin phân phối</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Ngày về đại {'\n'} lý :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:50}}>26/05/2019</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Nhà phân phối :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:20}}>Thế Giới Gas - Kho Hải Châu - Đà Nẵng</Text>
                        </View>
                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                ______________________________________________________________</Text>
                    </View>

                    <View style={{marginTop:10,marginLeft:20,marginVertical:15}}>
                        <Text style={{fontSize:17,lineHeight:22,color:'rgb(186,12,47)',letterSpacing:0.5,fontWeight:'bold',marginBottom:10}}>Thông tin giao hàng</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Ngày giao :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:50}}>30/06/2019</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Người giao :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:20}}>Nguyễn Văn Bình - 123400</Text>
                        </View>
                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                ______________________________________________________________</Text>
                    </View>

                    <View style={{marginTop:10,marginLeft:20,marginVertical:15}}>
                        <Text style={{fontSize:17,lineHeight:22,color:'rgb(186,12,47)',letterSpacing:0.5,fontWeight:'bold',marginBottom:10}}>Thông tin người dùng</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Ngày sản xuất :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:20}}>30/06/2019</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Ngày dùng :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:30}}>Nguyễn Thị Hương</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(79,79,79)',letterSpacing:-0.24}}>Địa chỉ :</Text>
                            <Text style={{fontSize:15,lineHeight:25,color:'rgb(0,0,0)',letterSpacing:-0.24,marginLeft:20}}>123 Lê Duẩn, Hải Châu, Đà Nẵng</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );

    }
}

const styles = StyleSheet.create({
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
});

export default BarCodeCheckScreen;