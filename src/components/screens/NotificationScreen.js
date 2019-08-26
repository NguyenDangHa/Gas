import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import LogoTGGas from '../../images/logoTGGas.png';
import Logo4U from '../../images/logo4U.png';
import LogoPhiLu from '../../images/logoPhiLu.png';
import LogoVooc from '../../images/logoVooc.png';
import IconTime from '../../images/iconTime.png';


class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.home()} >
                        <Image source={IconBack} style={{ width: 45, height: 45, }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 2, color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, marginTop: 5, fontWeight: 'bold' }}>Thông báo</Text>
                </View>


                <View style={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
                    <View style={{ margin: 15, justifyContent: 'space-between', borderWidth: 1, flexDirection: 'row', width: 384, height: 44, borderRadius: 20, backgroundColor: 'rgba(186,12,47,0.17)' }}>
                        <Text style={{ width: 73, height: 40, backgroundColor: 'rgb(186,12,47)', borderRadius: 20, textAlign: 'center', color: 'rgb(255,255,255)', fontSize: 15, letterSpacing: 0.56, paddingTop: 10 }}>Tất cả</Text>
                        <Text style={{ width: 80, height: 40, borderRadius: 20, textAlign: 'center', fontSize: 15, letterSpacing: 0.56, paddingTop: 10 }}>Đơn hàng</Text>
                        <Text style={{ width: 73, height: 40, borderRadius: 20, textAlign: 'center', fontSize: 15, letterSpacing: 0.56, paddingTop: 10 }}>Báo Gas</Text>
                        <Text style={{ width: 73, height: 40, borderRadius: 20, textAlign: 'center', fontSize: 15, letterSpacing: 0.56, paddingTop: 10 }}>Khác</Text>
                    </View>

                    <ScrollView>
                        <View style={{ margin: 20 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoTGGas} style={{ width: 54, height: 54, marginRight: 20 }} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={{ marginBottom: 10, color: 'rgb(186,12,47)', fontSize: 15, letterSpacing: 0.56, fontWeight: 'bold' }}>Thế Giới Gas cập nhật ứng dụng mới</Text>
                                        <Text style={{ marginBottom: 10, color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>Phiên bản Thế Giới Gas 2.0 vừa được phát hành {'\n'} trên kho ứng dụng Apple Store</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={Logo4U} style={{ width: 54, height: 54, marginRight: 20 }} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.request()}>
                                        <Text style={{ marginBottom: 10, color: 'rgb(186,12,47)', fontSize: 15, letterSpacing: 0.56, fontWeight: 'bold' }}>Nhà hàng 4U - Yêu cầu Thay Gas</Text>
                                        <Text style={{ marginBottom: 10, color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>Van gas đã chuyển, vui lòng thay gas</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoPhiLu} style={{ width: 54, height: 54, marginRight: 20 }} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.delivery()}>
                                        <Text style={{ marginBottom: 10, color: 'rgb(186,12,47)', fontSize: 15, letterSpacing: 0.56, fontWeight: 'bold' }}>Giao hàng thành công</Text>
                                        <Text style={{ marginBottom: 10, color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>Đơn hàng đã giao thành tông</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoVooc} style={{ width: 54, height: 54, marginRight: 20 }} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.order()}>
                                        <Text style={{ marginBottom: 10, color: 'rgb(186,12,47)', fontSize: 15, letterSpacing: 0.56, fontWeight: 'bold' }}>Xác nhận đặt hàng</Text>
                                        <Text style={{ marginBottom: 10, color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>Bạn có một đơn hàng cần xác nhận</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoVooc} style={{ width: 54, height: 54, marginRight: 20 }} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.order()}>
                                        <Text style={{ marginBottom: 10, color: 'rgb(186,12,47)', fontSize: 15, letterSpacing: 0.56, fontWeight: 'bold' }}>Xác nhận đặt hàng</Text>
                                        <Text style={{ marginBottom: 10, color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>Bạn có một đơn hàng cần xác nhận</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    btnVerify: {
        width: 120,
        height: 32,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 13,
        justifyContent: 'center',
        marginTop: 10
    },
    textBtnVerify: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
export default Notification;