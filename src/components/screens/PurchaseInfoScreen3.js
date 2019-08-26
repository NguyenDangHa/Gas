import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';
import ImageVisa from '../../images/ImageVisa.png';
import IconInFo from '../../images/IconInfo.png';

class PurchaseInfoScreen3 extends React.Component {
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
                    <TouchableOpacity onPress={() => Actions.purchaseinfo2()} ><Image source={IconBack} style={{ width: 45, height: 45, }}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Đặt mua hàng sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={{ width: 30, height: 30, marginTop: 5, marginRight: 10 }} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>

                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)', marginTop: 30 }}>Thông tin thanh toán</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <Text >Tổng tiền cơ bản :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)' }}>6,400,000 VNĐ</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text >Ưu đãi khi thanh toán {'\n'} online :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>320,000 VNĐ</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text >Tổng tiền thanh toán :</Text>
                                <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>6,080,000 VNĐ</Text>
                            </View>

                        </View>

                        <View style={{ margin: 20, alignItems: 'center', flexDirection: 'row', width: 381, height: 40, borderRadius: 13, backgroundColor: 'rgba(247,181,0,0.2)', borderWidth: 1, borderColor: 'rgb(247,181,0)' }}>
                            <Image style={{ width: 25, height: 25, marginLeft: 15, marginRight: 15 }} source={IconInFo} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12, lineHeight: 25, letterSpacing: -0.19, color: 'rgb(150,110,0)' }}>Giá rẻ hơn khi quý khách chọn </Text>
                                <Text style={{ fontSize: 12, lineHeight: 25, letterSpacing: -0.19, color: 'rgb(150,110,0)', fontWeight: 'bold', }}>“Thanh toán online”</Text>
                            </View>

                        </View>
                        <Text style={{
                            fontSize: 17,
                            lineHeight: 22, letterSpacing: 0.5,
                            color: 'rgb(186,12,47)', marginTop: 8, marginLeft: 20
                        }}>Hình thức thanh toán</Text>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked1: !this.state.checked1, checked2: this.state.checked1 })}>
                            <View style={{ margin: 15, justifyContent: 'center', width: 380, height: 130, borderWidth: 1, borderColor: 'rgb(196,177,181)', borderRadius: 15 }}>
                                <View style={{ flexDirection: 'row', marginLeft: 18 }}>

                                    <Image style={{ width: 24, height: 24 }} source={this.state.checked1 ? IconCheck : IconUnCheck} />

                                    <Text style={{ fontSize: 15, marginLeft: 7, letterSpacing: 0.44, color: 'rgb(0,0,0)' }}>Thanh toán Online</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12, letterSpacing: 0.35, color: 'rgb(109,114,120)', marginLeft: 50, marginTop: 5 }}>Thanh toán bằng thẻ tín dụng quốc tế: Visa, Master, JCB</Text>
                                    <Image style={{ width: 200, height: 20, margin: 15, marginLeft: 40 }} source={ImageVisa} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked2: !this.state.checked2, checked1: this.state.checked2 })}>
                            <View style={{ margin: 15, justifyContent: 'center', width: 384, height: 70, borderWidth: 1, borderColor: 'rgb(196,177,181)', borderRadius: 15 }}>
                                <View style={{ flexDirection: 'row', marginLeft: 18 }}>
                                    <Image style={{ width: 24, height: 24 }} source={this.state.checked2 ? IconCheck : IconUnCheck} />

                                    <Text style={{ fontSize: 15, marginLeft: 10, letterSpacing: 0.44, color: 'rgb(0,0,0)' }}>Chuyển khoản liên ngân hàng</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                    <Text style={{ fontSize: 12, letterSpacing: 0.35, color: 'rgb(109,114,120)' }}>Chuyển tiền qua tài khoản ngân hàng  </Text>
                                    <Text style={{ fontSize: 12, letterSpacing: 0.35, color: 'rgb(109,114,120)', fontWeight: 'bold', }}>Techcombank</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 100 }} >
                            <TouchableOpacity style={styles.btnLogin} onPress={() => Actions.verify()}>
                                <Text style={styles.textBtnLogin}>Đặt hàng</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    btnLogin: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnLogin: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    modal: {
        marginTop: 150,
        height: 300,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
    },
    modal2: {
        marginTop: 250,
        height: 418,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,

    },
    items: {
        backgroundColor: 'rgb(186,12,47)',
        fontSize: 15,
        lineHeight: 22,
        letterSpacing: 0.44,
        margin: 10,
        width: 114,
        height: 40,
        borderRadius: 22,
        textAlign: 'center',
        paddingTop: 10
    },
    btnSelectDate: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnSelectDate: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
export default PurchaseInfoScreen3;