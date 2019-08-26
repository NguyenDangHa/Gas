import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconBinh from '../../images/iconBinh.png';

class VerifyScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false, //state of modal default false
            name: '123 Võ Nguyên Giáp, Q. Sơn Trà, Tp. Đà Nẵng',
            isVisibleTow: false,
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => Actions.purchaseinfo3()} ><Image source={IconBack} style={{ width: 42, height: 42 }}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Xác nhận đặt hàng sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={{ marginTop: 5, marginRight: 10, width: 35, height: 35 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: 'rgb(255,255,255)' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)', marginTop: 20, marginBottom: 10 }}>Thông tin đặt hàng</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <Text>Đơn vị :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)' }}>Nhà hàng 4U</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text >Điện thoại :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>0905888999</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text >Địa chỉ :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>123 Võ Nguyên Giáp, Q. Sơn Trà,{'\n'} Tp.Đà Nẵng.</Text>
                            </View>
                        </View>

                        <View style={{ marginLeft: 20, marginVertical: 15 }}>
                            <Text style={{ marginTop: 10, marginBottom: 20, fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)' }}>Địa chỉ nhận hàng</Text>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                <Text>Cơ sở :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>Cơ sở 1</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text >Điện thoại :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>0905123321</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text>Địa chỉ :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>{this.state.name} </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text >Ngày giao :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>10 tháng 7 2019</Text>
                            </View>
                        </View>

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

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ marginTop: 15, marginBottom: 15, fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)' }}>Thông tin thanh toán</Text>
                            <Text style={{ fontSize: 15, lineHeight: 24, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>Tổng tiền: 	6,400,000 VNĐ </Text>
                            <Text style={{ fontSize: 15, lineHeight: 24, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>Hình thức: 	Chuyển khoảng ngân hàng</Text>
                        </View>

                        <View style={{ alignItems: 'center' }} >
                            <TouchableOpacity style={styles.btnVerify} onPress={() => Actions.onlinepayment()}>
                                <Text style={styles.textBtnVerify} >Xác nhận đặt hàng</Text>
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
        marginBottom: 30,
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
export default VerifyScreen;