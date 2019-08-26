import React, { Component } from 'react';
import {
    StyleSheet,
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

class InfoAccountScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Thông tin tài khoản</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={{ marginRight: 10, alignItems: 'center',width:30,height:30 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ marginTop: 20, fontSize: 20, letterSpacing: 0.75, color: 'rgb(186,12,47)', fontWeight: 'bold' }}>Thông tin chung</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={ImageProfile} />
                        </View>



                        <View style={{ marginTop: 20, marginLeft: 20, marginVertical: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Đại lý</Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 70 ,fontWeight:'bold'}}>Nhà hàng 4U</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Email : </Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(186,12,47)', letterSpacing: -0.24, marginLeft: 50,textDecorationLine: 'underline' }}>nhahang4u@gmail.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Số điện thoại</Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 20 }}>0905888999</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Địa chỉ : </Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 50 }}>123 Võ Nguyên Giáp</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Tỉnh/Thành Phố : </Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 20 }}>Đà Nẵng</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Quận/Huyện : </Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 40 }}>Hải Châu</Text>
                            </View>

                        </View>

                        <View style={{ marginTop: 10, marginLeft: 20, marginVertical: 15 }}>
                            <Text style={{ fontSize: 17, lineHeight: 22, color: 'rgb(186,12,47)', letterSpacing: 0.5, fontWeight: 'bold', marginBottom: 10 }}>Thông tin kinh doanh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Số đăng ký KD :</Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 20, fontWeight: 'bold' }}>KD12023004</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Mã số thuế :</Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 30, fontWeight: 'bold' }}>2349440</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Số lượng cửa hàng :</Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 20, fontWeight: 'bold' }}>3</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(79,79,79)', letterSpacing: -0.24 }}>Giao gas tự động :</Text>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(0,0,0)', letterSpacing: -0.24, marginLeft: 20, fontWeight: 'bold' }}>Có</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 10, marginLeft: 20, marginVertical: 15 }}>
                            <Text style={{ fontSize: 17, lineHeight: 22, color: 'rgb(186,12,47)', letterSpacing: 0.5, fontWeight: 'bold', marginBottom: 10 }}>Thông tin cửa hàng</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, lineHeight: 25, color: 'rgb(186,12,47)', letterSpacing: 0.44,textDecorationLine: 'underline' }}>
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

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 50,
        marginTop: 20,
        width: 328,
        height: 46,
        borderRadius: 25,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
    },
});

export default InfoAccountScreen;