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
import ImageGHTC from '../../images/IMGGHTC.png';
import ProFile from '../../images/ProfileImg.png';
import IconBinh from '../../images/iconBinh.png';
import IMGPhieu from '../../images/ImgPhieuGH.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/deliveryScreen.style';

class SuccessfulDeliveryScreen extends Component {
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
                    <Text style={styles.topText}>Giao hàng thành công</Text>
                    <Text></Text>
                </View>

                <Image style={styles.imageTop} source={ImageGHTC} />
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                            <Image style={styles.imageTime} source={IconTime} />
                            <Text style={styles.textTime}>20/07/2019</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textItem1}>Đơn hàng: 019203003</Text>
                            <Text style={styles.textItem2}>Đã được giao hàng thành công đến địa chỉ:</Text>
                            <Text style={styles.textItem3}>123 Nguyễn Tất Thành, Q. Hải Châu, Tp.Đà Nẵng</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30,marginBottom:20, width: 170, height: 154 }}>                           
                                <Text style={styles.textItem2}>Nhân viên giao hàng</Text>
                                <Image style={styles.imageProfile} source={ProFile} />
                                <Text style={styles.textItem2}>Nguyễn Văn Bình</Text>
                                <Text style={styles.textItem4}>MSNV : 00123</Text>                          
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

                        <View style={styles.bottomView}>
                            <Text style={styles.textBottom}>Hình ảnh xác nhận giao hàng</Text>
                            <Image style={styles.imageBottom} source={IMGPhieu} />
                        </View>

                    </View>
                </ScrollView>
            </View>
        );

    }
}
export default SuccessfulDeliveryScreen;