import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import IconTime from '../../images/iconTime.png';
import ImageGHTC from '../../images/IMGGHTC.png';
import ProFile from '../../images/ProfileImg.png';
import IconBinh from '../../images/iconBinh.png';
import IMGPhieu from '../../images/ImgPhieuGH.png';
import { Actions } from 'react-native-router-flux';



class SuccessfulDeliveryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconBack} style={{ width: 42, height: 42 }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Đặt hàng thành công</Text>
                    <Text></Text>
                </View>
                <Image style={{ width: 414, height: 200 }} source={ImageGHTC} />
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <Image style={{ width: 20, height: 19, marginRight: 10 }} source={IconTime} />
                            <Text style={{ fontSize: 12, letterSpacing: 0.45, color: 'rgb(74,74,74)', width: 80, height: 17 }}>20/07/2019</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, lineHeight: 28, letterSpacing: 0.75, color: 'rgb(186,12,47)', marginTop: 10, fontWeight: 'bold' }}>Đơn hàng: 019203003</Text>
                            <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgb(0,0,0)', marginTop: 10, fontWeight: 'bold' }}>Đã được giao hàng thành công đến dịa chỉ:</Text>
                            <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgb(0,0,0)', marginTop: 10 }}>123 Nguyễn Tất Thành, Q. Hải Châu, Tp.Đà Nẵng</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30,marginBottom:20 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 170, height: 154 }}>
                                <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgb(0,0,0)',  fontWeight: 'bold' }}>Nhân viên giao hàng</Text>
                                <Image style={{ width: 69, height: 69, borderRadius: 40,marginTop:10 }} source={ProFile} />
                                <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgb(0,0,0)', marginTop: 5, fontWeight: 'bold' }}>Nguyễn Văn Bình</Text>
                                <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>MSNV : 00123</Text>
                            </View>
                        </View>

                        <View style={{ width: 381, height: 120, borderRadius: 13, margin: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row', flex: 1, backgroundColor: 'rgb(255,130,0)', height: 46, borderTopLeftRadius: 13, borderTopRightRadius: 13 }}>
                                <Text style={{ marginLeft: 10, marginTop: 10, flex: 1, fontSize: 15, letterSpacing: 0.24, color: 'rgb(255,255,255)' }}>Loại hàng</Text>
                                <Text style={{ marginLeft: 105, marginTop: 10, flex: 1, fontSize: 15, letterSpacing: 0.24, color: 'rgb(255,255,255)', }}>Nước</Text>
                                <Text style={{ marginLeft: 40, marginTop: 10, flex: 1, fontSize: 15, letterSpacing: 0.24, color: 'rgb(255,255,255)', }}>Võ</Text>
                            </View>

                            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'rgb(255,230,230)', height: 46 }}>
                                <Image style={{ width: 10, height: 22, marginLeft: 18, marginTop: 13 }} source={IconBinh} />
                                <Text style={{ marginTop: 13, marginLeft: 10, fontSize: 15, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>V - GAS Hồng - 45KG</Text>
                                <Text style={{ marginTop: 13, marginLeft: 30, fontSize: 15, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>10</Text>
                                <Text style={{ marginTop: 13, marginLeft: 80, fontSize: 15, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>10</Text>
                            </View>

                            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'rgb(255,228,200)', height: 46, borderBottomLeftRadius: 13, borderBottomRightRadius: 13 }}>
                                <Image style={{ width: 10, height: 22, marginLeft: 18, marginTop: 13 }} source={IconBinh} />
                                <Text style={{ marginTop: 13, marginLeft: 10, fontSize: 15, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>V - GAS Hồng - 48KG</Text>
                                <Text style={{ marginTop: 13, marginLeft: 40, fontSize: 15, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>7</Text>
                                <Text style={{ marginTop: 13, marginLeft: 90, fontSize: 15, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>7</Text>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgb(0,0,0)', marginTop: 10,fontWeight:'bold' }}>Hình ảnh xác nhận giao hàng</Text>
                            <Image style={{ width: 300, height: 337 ,marginTop:30,marginBottom:50}} source={IMGPhieu} />
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
});

export default SuccessfulDeliveryScreen;