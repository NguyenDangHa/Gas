import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,

} from 'react-native';
import IconAddress from '../../images/addressIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
const { width: WIDTH } = Dimensions.get('window');
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';

class RegisterScreen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.backgroundContainer}>

                <View style={{ flexDirection: 'row',marginTop:20 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.registerTow()} ><Image source={IconBack}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 35, flex: 2 }}>thegioigas</Text>
                </View>

                <View style={styles.container}>
                    <View style={{ width: '100%', height: 80, backgroundColor: 'rgb(186,12,47)', alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Text style={{ fontSize: 20, color: 'rgb(255,255,255)', marginBottom: 10, marginTop: 10 }}>Đăng ký tài khoản</Text>
                        <Text style={{ fontSize: 12, color: 'rgb(255,255,255)' }}>Dành cho Đại lý & Khách hàng Công nghiệp</Text>
                    </View>

                    <View style={{ height:590, backgroundColor: 'rgb(255,255,255)', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ alignItems: 'center',width:'100%' }}>
                            <Text style={{ color: 'rgb(186,12,47)', fontSize: 15, margin: 15 }}>Bước 3: Thông tin kinh doanh</Text>
                            <Text style={{ fontSize: 15,marginBottom:15 }}>Vui lòng điền thông tin kinh doanh của đại lý</Text>
                        </View>
                        <View>
                            <View >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Địa chỉ"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none">
                                </TextInput>
                                <Image style={{ marginLeft: 5, position: 'absolute', top: 30, left: 37, }} source={IconAddress} />
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Số đăng ký kinh doanh"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none">
                                </TextInput>

                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Mã số thuế"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none">
                                </TextInput>

                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Số lượng cơ sở"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    secureTextEntry={true}>
                                </TextInput>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <Text style={{ fontSize: 14, color: 'rgb(146,146,146)', marginTop: 10, marginLeft: 10 }}>Giao ga tự động</Text>
                                <TouchableOpacity style={styles.btnYes}>
                                    <Text style={styles.textBtnLogin}>Có</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnNo}>
                                    <Text style={styles.textBtnLogin}>Không</Text>
                                </TouchableOpacity>

                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', marginLeft: 28 }}>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ checked1: !this.state.checked1 })}>
                                        <Image style={{ width: 30, height: 30,marginTop:10 }} source={this.state.checked1 ? IconCheck : IconUnCheck} />
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 15, fontSize: 12 }}> Tôi là chủ đơn vị</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginLeft: 28 }}>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ checked2: !this.state.checked2 })}>
                                        <Image style={{ width: 30, height: 30,marginTop:15 }} source={this.state.checked2 ? IconCheck : IconUnCheck} />
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 15, fontSize: 12 }}> Tôi đồng ý tuân thủ các quy định của </Text>
                                    <TouchableOpacity>
                                        <Text style={{ marginTop: 15, textDecorationLine: 'underline', color: 'rgb(186,12,47)', fontSize: 12 }}>Thế giới Gas</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                        <View style={{ alignItems: 'center', }} >
                            <TouchableOpacity style={styles.btnLogin}>
                                <Text style={styles.textBtnLogin} onPress={() => Actions.login()}>Hoàn tất</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'grey',

    },
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(102,102,102,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
   
    },
    input: {
        marginTop: 20,
        width: 328,
        height: 46,
        borderRadius: 25,
        fontSize: 20,
        paddingLeft: 55,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
    },
    btnLogin: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },
    btnYes: {
        width: 87,
        height: 46,
        borderRadius: 23,
        backgroundColor: 'rgb(186,12,47)',

        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNo: {
        width: 87,
        height: 46,
        borderRadius: 23,
        backgroundColor: 'rgba(102,102,102,0.5)',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnLogin: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnForget: {
        width: '50%',
        justifyContent: 'center',
        color: 'rgb(255,130,0)',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    btnRegister: {
        width: '50%',
        justifyContent: 'center',
        color: 'rgb(255,130,0)',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    textBottom: {
        color: 'rgb(255,130,0)',
    },
});
export default RegisterScreen2;