import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconBinh from '../../images/iconBinh.png';
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';

class ReceiveScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false, //state of modal default false
            name: '123 Võ Nguyên Giáp, Q. Sơn Trà, Tp. Đà Nẵng',
            isVisibleTow: false,
            check1: false,
            check2: false
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => Actions.home()} ><Image source={IconBack} style={{ width: 42, height: 42, }}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Nhận đơn hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={{ marginTop: 5, marginRight: 10, width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>
                        <View style={{ marginLeft: 20, justifyContent: 'center', margin: 10 }}>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)', marginTop: 20, marginBottom: 20 }}>Mã đơn hàng :</Text>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)', marginTop: 20, marginBottom: 10, marginLeft: 20 }}>01906000001</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Đại lý sỉ :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: -0.24, color: 'rgb(0,0,0)', marginLeft: 20 }}>Nhà hàng 4U</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Điện thoại :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)', marginLeft: 20 }}>0905888999</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Địa chỉ :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)', marginLeft: 20 }}>123 Võ Nguyên Giáp, Q. Sơn Trà,{'\n'} Tp.Đà Nẵng.</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Tình trạng : </Text>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(224,32,32)', marginLeft: 20 }}> Chưa giao</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Tổng tiền :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)', marginLeft: 20 }}>6,400,000 VNĐ</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Thanh toán :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)', marginLeft: 20 }}>Đã thanh toán</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Hình thức :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)', marginLeft: 20 }}>Chuyển khoản</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Đại lý xác nhận :</Text>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(224,32,32)', marginLeft: 20 }}>Chưa</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(74,74,74)' }}>Ngày giao :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)', marginLeft: 20 }}>08/07/2019</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>

                        </View>

                        <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>Chi tiết đơn hàng</Text>

                        <View style={{ width: 381, height: 120, borderRadius: 13, margin: 10 }}>

                            <View style={{ flex: 1, flexDirection: 'row', flex: 1, backgroundColor: 'rgb(255,130,0)', height: 50, borderTopLeftRadius: 13, borderTopRightRadius: 13 }}>
                                <Text style={{ marginLeft: 15, marginTop: 10, flex: 1, fontSize: 15, letterSpacing: 0.24, color: 'rgb(255,255,255)' }}>Loại hàng</Text>
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


                        <View style={{ flexDirection: 'row', marginLeft: 18, marginTop: 20 }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ checked1: !this.state.checked1 })}>
                                <Image style={{ width: 26, height: 26 }} source={this.state.checked1 ? IconCheck : IconUnCheck} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12, marginLeft: 7, letterSpacing: 0.44, color: 'rgb(0,0,0)', marginTop: 5 }}>Xác nhận Tài xế đã giao hàng đúng và đủ như bảng kê trên.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 18, marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ checked2: !this.state.checked2 })}>
                                <Image style={{ width: 26, height: 26 }} source={this.state.checked2 ? IconCheck : IconUnCheck} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12, marginLeft: 7, letterSpacing: 0.44, color: 'rgb(0,0,0)', marginTop: 5 }}>Xác nhận khoản nợ (nếu có) đúng và đủ như bảng kê trên.</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.btnVerify} onPress={() => Actions.onlinepayment()}>
                                <Text style={styles.textBtnVerify} >Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    btnVerify: {
        width: 163,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textBtnVerify: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
export default ReceiveScreen;