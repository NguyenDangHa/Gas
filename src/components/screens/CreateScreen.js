import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import IconTime from '../../images/iconTime.png';
import ImageTC from '../../images/ImgThanhCong.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/createScreen.style';

class CreateScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Đơn hàng tự động mới</Text>
                    <Text></Text>
                </View>

                <Image style={styles.imageTop} source={ImageTC} />

                <View >
                    <View style={styles.textItem1}>
                        <Image style={styles.imageTime} source={IconTime} />
                        <Text style={styles.textTime}>20/07/2019</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textContainer}>Đơn hàng tự động</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.textContent}>
                    Xin chào quý khách! Chúng tôi vừa tạo một đơn hàng giao gas tự động cho quý khách dựa theo cảm biến tại 
                    “003 - Nhà hàng 4U cơ sở 1” - báo hết gas.{'\n'}{'\n'}
                    Nếu quý khách muốn huỷ đơn hàng vui lòng bấm “Mã đơn hàng” – “Chưa giao” và chọn "Huỷ." {'\n'}{'\n'}
                    Nếu quý khách đồng ý với đơn hàng tự động này thì không cần phải làm gì cả.{'\n'}{'\n'}{'\n'}</Text>
                    <Text style={styles.textBottom}> * Dịch vụ này được thực hiện do tài khoản của quý khách có đăng ký Dịch vụ giao gas tự động khi hết gas của Thế Giới Gas.</Text>
                </View>
            </View>
        );
    }
}
export default CreateScreen;