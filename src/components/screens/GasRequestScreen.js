import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import IconTime from '../../images/iconTime.png';
import ImageHetGas from '../../images/ImghetGas.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/gasRequestScreen.style';

class GasRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <ScrollView>
                    <View style={styles.topView}>
                        <TouchableOpacity onPress={() => Actions.notifications()} >
                            <Image source={IconBack} style={styles.imageBack} />
                        </TouchableOpacity>
                        <Text style={styles.topText}>Hết gas,cần đặt hàng</Text>
                        <Text></Text>
                    </View>
                    <Image style={styles.imageTop} source={ImageHetGas} />
                    <View >
                        <View style={styles.textItem1}>
                            <Image style={styles.imageTime} source={IconTime} />
                            <Text style={styles.textTime}>20/07/2019</Text>
                        </View>

                        <View style={styles.textItem2}>
                            <Text style={styles.textRequest}>Yêu cầu thay gas :</Text>
                            <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1</Text>
                        </View>

                        <View style={styles.textItem3}>
                            <Text style={styles.textContainer}>
                                Chúng tôi ghi nhận, van gas tại “Nhà hàng 4U - Cơ  sở 1” đã chuyển qua dùng bình dự phòng. Vui lòng  đặt hàng thay thế gas đã hết để hoạt động của bạn không bị gián đoạn.{'\n'}{'\n'}
                                Nếu bạn đã đăng ký Dịch vụ tự động giao gas khi hết bình của Thế Giới Gas, hệ thống sẽ tự động tạo đơn hàng cho bạn.{'\n'}{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.btnBottom} >
                        <TouchableOpacity style={styles.btnCreate} onPress={() => Actions.createDH()}>
                            <Text style={styles.textBtnCreate}>Tạo đơn hàng</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );

    }
}
export default GasRequest;