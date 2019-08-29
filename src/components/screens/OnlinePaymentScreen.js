import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';
import IconProfile from '../../images/IconProfile.png';
import ImageBank from '../../images/ImageBanks.png';
import ImageVisa from '../../images/ImageVisa.png';
import styles from '../../assets/styles/paymentScreen.style';

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
                    <View style={styles.topView}>
                        <TouchableOpacity onPress={() => Actions.verify()} >
                            <Image source={IconBack} style={styles.imageBack} />
                        </TouchableOpacity>
                        <Text style={styles.topText}>Chọn hình thức thanh{'\n'} toán online</Text>
                        <TouchableOpacity onPress={() => Actions.notifications()}>
                            <Image source={IconNotifications} style={styles.notification} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.textItem}>
                                <Text style={styles.textItem1}>Đơn hàng : </Text>
                                <Text style={styles.textItem2}>01906000001</Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:20 }}>
                                <Text style={styles.textItem1}>Chi phí : </Text>
                                <Text style={styles.textItem3}>6,4000,000 VNĐ</Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked1: !this.state.checked1, checked2: this.state.checked1 })}>
                            <View style={styles.btnItem1}>
                                <View style={styles.borderView}>
                                    <Image style={styles.iconImage} source={this.state.checked1 ? IconCheck : IconUnCheck} />
                                    <Text style={styles.textPayment}>Thanh toán bằng ATM nội địa/Internet{'\n'}Banking</Text>
                                </View>
                                <View>
                                    <Image style={styles.image1} source={ImageBank} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.setState({ checked2: !this.state.checked2, checked1: this.state.checked2 })}>
                            <View style={styles.btnItem2}>
                                <View style={styles.borderView}>
                                    <Image style={styles.iconImage} source={this.state.checked2 ? IconCheck : IconUnCheck} />
                                    <Text style={styles.textPayment}>Thanh toán bằng thẻ Visa, Master, JCB</Text>
                                </View>
                                <View>
                                    <Image style={styles.image2} source={ImageVisa} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.btnBottom} >
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
                            <View style={styles.modalContainer}>
                                <Image style={styles.modalImage} source={IconProfile} />

                                <View style={{ marginVertical: 10 }}>
                                    <Text style={styles.text1}>Đơn hàng của quý khách đã đặt hàng {'\n'} thành công.</Text>
                                    <View style={styles.viewRow}>
                                        <Text style={styles.text2}>Đơn hàng : </Text>
                                        <Text style={styles.text3}>01906000001</Text>
                                    </View>
                                    <Text style={styles.text4}>Cảm ơn quý khách đã sử dụng gas của {'\n'} chúng tôi</Text>
                                </View>

                                <TouchableOpacity style={styles.btnClose} onPress={async () => { await this.setState({ isVisible: false }); Actions.home() }}>
                                    <View style={{ alignItems: 'center' }} >
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
export default OnlinePaymentScreen;