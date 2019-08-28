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
import styles from '../../assets/styles/order.style';

class OrderSuccessScreen extends Component {
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
                    <Text style={styles.topText}>Đặt hàng thành công</Text>
                    <Text></Text>
                </View>

                <Image style={styles.imageTop} source={ImageTC} />

                <View >
                    <View style={styles.textItem1}>
                        <Image style={styles.imageTime} source={IconTime} />
                        <Text style={styles.textTime}>20/07/2019</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textContainer}>Đặt hàng thành công</Text>
                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1</Text>
                    </View>
                  
                    <View style={styles.content}>
                        <Text style={styles.textContent}>
                            Chúc mừng bạn! Đơn hàng 01906270003 của bạn đặt giao đến địa chỉ: 123 Nguyễn Tất Thành đã được xác nhận.{'\n'}{'\n'}
                            Nhân viên giao hàng của Thế Giới Gas sẽ đến trong thời gian sớm nhất.
                        </Text>
                    </View>

                </View>

                <View style={styles.btnBottom} >
                    <TouchableOpacity style={styles.btnCreate} >
                        <Text style={styles.textBtnCreate}>Tạo đơn hàng</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );

    }
}
export default OrderSuccessScreen;