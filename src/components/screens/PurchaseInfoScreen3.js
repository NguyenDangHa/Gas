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
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';
import ImageVisa from '../../images/ImageVisa.png';
import IconInFo from '../../images/IconInfo.png';
import styles from '../../assets/styles/purchase3.style';

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
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.purchaseinfo2()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Đặt mua hàng sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={styles.textContainer}>Thông tin thanh toán</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <Text style={styles.textContent2}>Tổng tiền cơ bản :</Text>
                                <Text style={styles.textContent1}>6,400,000 VNĐ</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textContent2}>Ưu đãi khi thanh toán {'\n'} online :</Text>
                                <Text style={styles.textContent1}>320,000 VNĐ</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={styles.textContent2}>Tổng tiền thanh toán :</Text>
                                <Text style={styles.textContent1}>6,080,000 VNĐ</Text>
                            </View>
                        </View>

                        <View style={styles.viewNote}>
                            <Image style={{ width: 25, height: 25,}} source={IconInFo} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textNote1}>Giá rẻ hơn khi quý khách chọn </Text>
                                <Text style={styles.textNote2}>“Thanh toán online”</Text>
                            </View>

                        </View>
                        <Text style={styles.textContainer}>Hình thức thanh toán</Text>
                        <TouchableOpacity
                            onPress={() => this.setState({ checked1: !this.state.checked1, checked2: this.state.checked1 })}>
                            <View style={styles.viewClick1}>
                                <View style={{ flexDirection: 'row'}}>

                                    <Image style={styles.iconCheck} source={this.state.checked1 ? IconCheck : IconUnCheck} />

                                    <Text style={styles.textContent1}>Thanh toán Online</Text>
                                </View>
                                <View>
                                    <Text style={styles.textClick1}>Thanh toán bằng thẻ tín dụng quốc tế: Visa, Master, JCB</Text>
                                    <Image style={styles.imageVisa} source={ImageVisa} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked2: !this.state.checked2, checked1: this.state.checked2 })}>
                            <View style={styles.viewClick2}>
                                <View style={{ flexDirection: 'row'}}>
                                    <Image style={styles.iconCheck} source={this.state.checked2 ? IconCheck : IconUnCheck} />

                                    <Text style={styles.textContent1}>Chuyển khoản liên ngân hàng</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textClick1}>Chuyển tiền qua tài khoản ngân hàng  </Text>
                                    <Text style={styles.textClick2}>Techcombank</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.btnBottom} >
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
export default PurchaseInfoScreen3;