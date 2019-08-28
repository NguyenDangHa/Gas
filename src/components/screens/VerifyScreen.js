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
import styles from '../../assets/styles/verifyScreen.style';

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
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.purchaseinfo3()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Xác nhận đặt hàng sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <View >
                            <Text style={styles.textContainer}>Thông tin đặt hàng</Text>
                            <View style={{ flexDirection: 'row'}}>
                                <Text  style={styles.textContent2}>Đơn vị :</Text>
                                <Text style={styles.textContent1}>           Nhà hàng 4U</Text>
                            </View>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={styles.textContent2}>Điện thoại :</Text>
                                <Text style={styles.textContent3}>0905888999</Text>
                            </View>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={styles.textContent2}>Địa chỉ :</Text>
                                <Text style={styles.textContent3}>    123 Võ Nguyên Giáp, Q. Sơn Trà,{'\n'} Tp.Đà Nẵng.</Text>
                            </View>
                        </View>

                        <View >
                            <Text style={styles.textContainer}>Địa chỉ nhận hàng</Text>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={styles.textContent2}>Cơ sở :</Text>
                                <Text style={styles.textContent1}>             Cơ sở 1</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textContent2}>Điện thoại :</Text>
                                <Text style={styles.textContent3}>0905123321</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textContent2}>Địa chỉ :</Text>
                                <Text style={styles.textContent3}>    123 Võ Nguyên Giáp, Q. Sơn Trà,{'\n'} Tp.Đà Nẵng.</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textContent2}>Ngày giao :</Text>
                                <Text style={styles.textContent1}>        10 tháng 7 2019</Text>
                            </View>
                        </View>

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
                            <Text style={styles.textContainer}>Thông tin thanh toán</Text>
                            <Text style={styles.payment}>Tổng tiền: 	6,400,000 VNĐ </Text>
                            <Text style={styles.payment}>Hình thức: 	Chuyển khoảng ngân hàng</Text>
                        </View>

                        <View style={{ alignItems: 'center'}} >
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
export default VerifyScreen;