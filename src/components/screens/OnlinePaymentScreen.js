import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';

import IconProfile from '../../images/IconProfile.png';
import ImageBank from '../../images/ImageBanks.png';
import ImageVisa from '../../images/ImageVisa.png';

class OnlinePaymentScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check1: false,
            check2: false,
            isVisible: false, //state of modal default false
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => Actions.verify()} ><Image source={IconBack} style={{ width: 42, height: 42, }}></Image></TouchableOpacity>
                        <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Chọn hình thức thanh{'\n'} toán online</Text>
                        <TouchableOpacity onPress={() => Actions.notifications()}>
                            <Image source={IconNotifications} style={{ width: 30, height: 30, marginTop: 5, marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 10 }}>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)' }}>Đơn hàng : </Text>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(186,12,47)' }}>01906000001</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)' }}>Chi phí : </Text>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)' }}>6,4000,000</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked1: !this.state.checked1, checked2: this.state.checked1 })}>
                            <View style={{ margin: 15, justifyContent: 'center', width: 384, height: 223, borderWidth: 1, borderColor: 'rgb(196,177,181)', borderRadius: 15 }}>
                                <View style={{ flexDirection: 'row', marginLeft: 18 }}>
                                    <Image style={{ width: 24, height: 24 }} source={this.state.checked1 ? IconCheck : IconUnCheck} />
                                    <Text style={{ fontSize: 15, marginLeft: 10, letterSpacing: 0.44, color: 'rgb(0,0,0)' }}>Thanh toán bằng ATM nội địa/Internet{'\n'}Banking</Text>
                                </View>
                                <View>
                                    <Image style={{ width: 350, height: 126, margin: 18 }} source={ImageBank} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked2: !this.state.checked2, checked1: this.state.checked2 })}>
                            <View style={{ margin: 15, justifyContent: 'center', width: 384, height: 98, borderWidth: 1, borderColor: 'rgb(196,177,181)', borderRadius: 15 }}>
                                <View style={{ flexDirection: 'row', marginLeft: 18 }}>
                                    <Image style={{ width: 24, height: 24 }} source={this.state.checked2 ? IconCheck : IconUnCheck} />
                                    <Text style={{ fontSize: 15, marginLeft: 15, letterSpacing: 0.44, color: 'rgb(0,0,0)' }}>Thanh toán bằng thẻ Visa, Master, JCB</Text>
                                </View>
                                <View>
                                    <Image style={{ width: 150, height: 18, marginLeft: 50, marginTop: 10 }} source={ImageVisa} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 270 }} >
                            <TouchableOpacity style={styles.btnDatHang} onPress={async () => { await this.setState({ isVisible: true }); }}>
                                <Text style={styles.textBtnDatHang} >Đặt hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={this.state.isVisible}
                        onRequestClose={() => { this.setState({ isVisible: true }) }}>
                        <View style={styles.modal}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 110, height: 110, justifyContent: 'center', borderRadius: 60 }} source={IconProfile} />
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)', marginTop: 10, marginBottom: 10, marginLeft: 20 }}>Đơn hàng của quý khách đã đặt{'\n'} hàng thành công.</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                        <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(186,12,47)', marginLeft: 50 }}>Đơn hàng : </Text>
                                        <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(186,12,47)', fontWeight: 'bold' }}>01906000001</Text>
                                    </View>
                                    <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)', marginLeft: 20 }}>Cảm ơn quý khách đã sử dụng gas của {'\n'} chúng tôi</Text>
                                </View>
                                <TouchableOpacity style={styles.btnClose} onPress={async () => { await this.setState({ isVisible: false }); Actions.home() }}>
                                    <View style={{ alignItems: 'center'}} >
                                        <Text style={styles.textBtnClose} >Đóng</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    btnDatHang: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnDatHang: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
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
        fontWeight: 'bold'
    },
    modal: {
        marginTop: 120,
        height: 400,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default OnlinePaymentScreen;