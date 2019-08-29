import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconBinh from '../../images/iconBinh.png';
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';
import IconMaDH from '../../images/iconMaDonHang.png';
import styles from '../../assets/styles/receiveScreen.style';

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
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.home()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Nhận đơn hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.contentTop}>
                            <View style={styles.textContentTop}>
                                <Image style={styles.itemLeftImage} source={IconMaDH} />
                                <Text style={styles.textContent1}>Mã đơn hàng :</Text>
                                <Text style={styles.textContainer}>01906000001</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Đại lý sỉ :</Text>
                                <Text style={styles.textContent1}>          Nhà hàng 4U</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Điện thoại :</Text>
                                <Text style={styles.textContent3}>0905888999</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Địa chỉ :</Text>
                                <Text style={styles.textContent3}>      123 Võ Nguyên Giáp,{'\n'} Q. Sơn Trà, Tp.Đà Nẵng.</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Tình trạng : </Text>
                                <Text style={styles.textContent4}> Chưa giao</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Tổng tiền :</Text>
                                <Text style={styles.textContent1}>        6,400,000 VNĐ</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Thanh toán :</Text>
                                <Text style={styles.textContent1}>    Đã thanh toán</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Hình thức :</Text>
                                <Text style={styles.textContent1}>       Chuyển khoản</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>

                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Đại lý xác nhận :</Text>
                                <Text style={styles.textContent4}>Chưa</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                                <Text style={styles.textContent2}>Ngày giao :</Text>
                                <Text style={styles.textContent1}>        08/07/2019</Text>
                            </View>
                            <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginBottom: 5, textAlign: 'center' }}>
                                ______________________________________________________________</Text>

                        </View>

                        <Text style={styles.textContainer}>Chi tiết đơn hàng</Text>

                        <View style={styles.detail}>
                            <View style={styles.content1}>
                                <Text style={styles.contentItems1}>Loại hàng</Text>
                                <Text style={styles.contentItems}>Nước</Text>
                                <Text style={styles.contentItems}>Võ</Text>
                            </View>

                            <View style={styles.content2}>
                                <Image style={styles.iconGas} source={IconBinh} />
                                <Text style={styles.contentItems2}>V - GAS Hồng - 45KG</Text>
                                <Text style={styles.contentItems3}>10</Text>
                                <Text style={styles.contentItems3}>10</Text>
                            </View>

                            <View style={styles.content3}>
                                <Image style={styles.iconGas} source={IconBinh} />
                                <Text style={styles.contentItems2}>V - GAS Hồng - 48KG</Text>
                                <Text style={styles.contentItems3}>7</Text>
                                <Text style={styles.contentItems3}>7</Text>
                            </View>
                        </View>

                        <View>
                            <View style={styles.checkBox}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ checked1: !this.state.checked1 })}>
                                    <Image style={styles.iconCheck} source={this.state.checked1 ? IconCheck : IconUnCheck} />
                                </TouchableOpacity>
                                <Text style={styles.textCheck}>Xác nhận Tài xế đã giao hàng đúng và đủ như bảng{'\n'} kê trên.</Text>
                            </View>
                            <View style={styles.checkBox}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ checked2: !this.state.checked2 })}>
                                    <Image style={styles.iconCheck} source={this.state.checked2 ? IconCheck : IconUnCheck} />
                                </TouchableOpacity>
                                <Text style={styles.textCheck}>Xác nhận khoản nợ (nếu có) đúng và đủ như bảng{'\n'} kê trên.</Text>
                            </View>
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
export default ReceiveScreen;