import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconMaDH from '../../images/iconMaDonHang.png';
import IconDate from '../../images/iconNgayGiao.png';
import IconAddress from '../../images/iconNoiNhan.png';

import ChuaGiaoCheck from '../../images/chuaGiaoCheck.png';
import ChuaGiaoUnCheck from '../../images/chuaGiaoUnCheck.png';

import DaGiaoCheck from '../../images/daGiaoCheck.png';
import DaGiaoUnCheck from '../../images/daGiaoUnCheck.png';


class HistoryPurchase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check1: true,
            check2: false
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => Actions.home()} ><Image source={IconBack} style={{ width: 42, height: 42}}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Quản lý đơn hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={{ marginTop: 5, marginRight: 10,width:30,height:30 }} ></Image>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>
                        <View style={{ borderWidth: 1, margin: 15, flex: 1, flexDirection: 'row', width: 380, height: 44, borderRadius: 20, borderColor: 'rgba(186,12,47,0.17)' }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ checked1: !this.state.checked1, checked2: this.state.checked1 }, Actions.history())}>
                                <Image style={{ width: 190, height: 44, borderRadius: 20 }}
                                    source={this.state.checked1 ? ChuaGiaoUnCheck : ChuaGiaoCheck} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.setState({ checked2: !this.state.checked2, checked1: this.state.checked2 }, Actions.finish())}>
                                <Image style={{ width: 190, height: 44, borderRadius: 20 }} source={this.state.checked2 ? DaGiaoCheck : DaGiaoUnCheck} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', margin: 15 }}>
                        <View style={{ marginBottom: 10, flexDirection: 'row', width: 384, height: 149, borderRadius: 15, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                                <View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,235,235)', width: 156, height: 73, borderTopLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 5 }} source={IconMaDH} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Mã đơn hàng</Text>
                                        </View>

                                        <Text style={{ color: 'rgb(186,12,47)', textDecorationLine: 'underline', letterSpacing: -0.19 }}>01908300003</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(248,248,248)', width: 156, height: 73, borderBottomLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 10 }} source={IconDate} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Ngày giao</Text>
                                        </View>
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19 }}>22/07/2019</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: 'rgb(255,255,255)', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 16, height: 18, margin: 5 }} source={IconAddress} />
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19, marginTop: 5 }}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ color: 'rgb(0,0,0)', fontSize: 13, letterSpacing: -0.21, marginTop: 5 }}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }} >
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: 10, flexDirection: 'row', width: 384, height: 149, borderRadius: 15, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                                <View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,235,235)', width: 156, height: 73, borderTopLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 5 }} source={IconMaDH} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Mã đơn hàng</Text>
                                        </View>

                                        <Text style={{ color: 'rgb(186,12,47)', textDecorationLine: 'underline', letterSpacing: -0.19 }}>01908300003</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(248,248,248)', width: 156, height: 73, borderBottomLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 10 }} source={IconDate} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Ngày giao</Text>
                                        </View>
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19 }}>22/07/2019</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: 'rgb(255,255,255)', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 16, height: 18, margin: 5 }} source={IconAddress} />
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19, marginTop: 5 }}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ color: 'rgb(0,0,0)', fontSize: 13, letterSpacing: -0.21, marginTop: 5 }}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }} >
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: 10, flexDirection: 'row', width: 384, height: 149, borderRadius: 15, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                                <View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,235,235)', width: 156, height: 73, borderTopLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 5 }} source={IconMaDH} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Mã đơn hàng</Text>
                                        </View>

                                        <Text style={{ color: 'rgb(186,12,47)', textDecorationLine: 'underline', letterSpacing: -0.19 }}>01908300003</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(248,248,248)', width: 156, height: 73, borderBottomLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 10 }} source={IconDate} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Ngày giao</Text>
                                        </View>
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19 }}>22/07/2019</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: 'rgb(255,255,255)', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 16, height: 18, margin: 5 }} source={IconAddress} />
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19, marginTop: 5 }}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ color: 'rgb(0,0,0)', fontSize: 13, letterSpacing: -0.21, marginTop: 5 }}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }} >
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: 10, flexDirection: 'row', width: 384, height: 149, borderRadius: 15, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                                <View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255,235,235)', width: 156, height: 73, borderTopLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 5 }} source={IconMaDH} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Mã đơn hàng</Text>
                                        </View>

                                        <Text style={{ color: 'rgb(186,12,47)', textDecorationLine: 'underline', letterSpacing: -0.19 }}>01908300003</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(248,248,248)', width: 156, height: 73, borderBottomLeftRadius: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 16, height: 18, marginRight: 10 }} source={IconDate} />
                                            <Text style={{ color: 'rgb(109,114,120)', marginBottom: 10 }}>Ngày giao</Text>
                                        </View>
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19 }}>22/07/2019</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: 'rgb(255,255,255)', borderTopRightRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ width: 16, height: 18, margin: 5 }} source={IconAddress} />
                                        <Text style={{ color: 'rgb(109,114,120)', fontSize: 12, letterSpacing: -0.19, marginTop: 5 }}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ color: 'rgb(0,0,0)', fontSize: 13, letterSpacing: -0.21, marginTop: 5 }}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }} >
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
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
export default HistoryPurchase;