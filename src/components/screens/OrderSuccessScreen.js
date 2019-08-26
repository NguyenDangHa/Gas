import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import IconTime from '../../images/iconTime.png';
import ImageTC from '../../images/ImgThanhCong.png';
import { Actions } from 'react-native-router-flux';



class OrderSuccessScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
       
        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Đặt hàng thành công</Text>
                    <Text></Text>
                </View>
                <Image style={{ width: 414, height: 200 }} source={ImageTC} />

                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <Image style={{ width: 20, height: 19, marginRight: 10 }} source={IconTime} />
                        <Text style={{ fontSize: 12, letterSpacing: 0.45, color: 'rgb(74,74,74)', width: 80, height: 17 }}>20/07/2019</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, lineHeight: 28, letterSpacing: 0.75, color: 'rgb(186,12,47)', marginTop: 10, fontWeight: 'bold' }}>Đặt hàng thành công</Text>
                        <Text style={{ fontSize: 15, lineHeight: 28, letterSpacing: 0.56, color: 'rgb(0,0,0)', marginTop: 10, fontWeight: 'bold' }}>Nhà hàng 4U - Cơ sở 1</Text>
                    </View>
                    <View style={{ width: 380, height: 144, marginTop: 5, marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, letterSpacing: 0.56, color: 'rgb(0,0,0)' }}>Chúc mừng bạn! Đơ hàng 01906270003 của bạn đặt giao đến địa chỉ: 123 Nguyễn Tất Thành đã được xác nhận.{'\n'}{'\n'}
                            Nhân viên giao hàng của Thế Giới Gas sẽ đến trong thời gian sớm nhất.</Text>
                    </View>

                </View>

                <View style={{ alignItems: 'center', marginTop: 15, paddingBottom: 40 }} >
                    <TouchableOpacity style={styles.btnCreate} >
                        <Text style={styles.textBtnCreate}>Tạo đơn hàng</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    btnCreate: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(248,201,210)',
       
    },
    textBtnCreate: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.58,
        fontSize: 14,
        fontWeight: 'bold'
    },
});

export default OrderSuccessScreen;