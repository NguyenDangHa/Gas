import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import ImageProfile from '../../images/ProfileTTTK.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/infoAccountScreen.style';

class InfoAccountScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Thông tin tài khoản</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ marginLeft: 20}}>
                        <Text style={styles.textInfo}>Thông tin chung</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={styles.imageProfile} source={ImageProfile} />
                        </View>

                        <View style={styles.container}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Đại lý</Text>
                                <Text style={styles.textItem2}>Nhà hàng 4U</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Email : </Text>
                                <Text style={styles.textUnderline}>nhahang4u@gmail.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Số điện thoại</Text>
                                <Text style={styles.textItem3}>0905888999</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Địa chỉ : </Text>
                                <Text style={styles.textItem3}>123 Võ Nguyên Giáp</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Tỉnh/Thành Phố : </Text>
                                <Text style={styles.textItem3}>Đà Nẵng</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Quận/Huyện : </Text>
                                <Text style={styles.textItem3}>Hải Châu</Text>
                            </View>

                        </View>

                        <View style={styles.container}>
                            <Text style={styles.textInfo2}>Thông tin kinh doanh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Số đăng ký KD :</Text>
                                <Text style={styles.textItem2}>KD12023004</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Mã số thuế :</Text>
                                <Text style={styles.textItem2}>2349440</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Số lượng cửa hàng :</Text>
                                <Text style={styles.textItem2}>3</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textItem1}>Giao gas tự động :</Text>
                                <Text style={styles.textItem2}>Có</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.textInfo2}>Thông tin cửa hàng</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.textUnderline}>
                                    Nhấn vào đây để xem chi tiết cửa hàng
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        );

    }
}

export default InfoAccountScreen;