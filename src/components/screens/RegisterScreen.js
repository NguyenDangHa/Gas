import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import IconChat from '../../images/chatIcon.png';
import IconPhone from '../../images/phoneIcon.png';
import IconMail from '../../images/mailIcon.png';
import IconPlus from '../../images/plus.png';
import { Actions } from 'react-native-router-flux';
const { width: WIDTH } = Dimensions.get('window')

class RegisterScreen extends Component {
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
                <View style={{marginTop:30}}>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 35, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>thegioigas</Text>
                </View>
                <View style={styles.container}>
                    <View style={{ width: '100%', height: 80, backgroundColor: 'rgb(186,12,47)', alignItems: 'center', borderTopLeftRadius: 10,borderTopRightRadius: 10 }}>
                        <Text style={{ fontSize: 20, color: 'rgb(255,255,255)', marginBottom: 10, marginTop: 10 }}>Đăng ký tài khoản</Text>
                        <Text style={{ fontSize: 12, color: 'rgb(255,255,255)' }}>Dành cho Đại lý & Khách hàng Công nghiệp</Text>
                    </View>

                    <View style={{ width: 384,height:580, backgroundColor: 'rgb(255,255,255)', alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <View style={{ alignItems: 'center',marginBottom:20 }}>
                            <Text style={{ color: 'rgb(186,12,47)', fontSize: 15, margin: 20 }}>Bước 1: Thông tin tài khoản</Text>
                            <Text style={{ fontSize: 15 }}>Vui lòng điền thông tin đại lý, khách công nghiệp</Text>
                        </View>
                        <View>
                            <View >
                                <TextInput
                                    style={styles.input}
                                    placeholder="Tên đơn vị"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none">
                                </TextInput>
                            </View>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Người liên hệ"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none">
                                </TextInput>
                                <Image style={{ marginLeft: 5, position: 'absolute', top: 30, left: 37, }} source={IconChat} />
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Điện thoại"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none">
                                </TextInput>
                                <Image style={{ marginLeft: 5, position: 'absolute', top: 30, left: 37, }} source={IconPhone} />
                            </View>

                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor={'grey'}
                                    underLineColorAndroid='transparent'
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    keyboardType="email-address">
                                </TextInput>
                                <Image style={{ marginLeft: 5, position: 'absolute', top: 30, left: 37, }} source={IconMail} />
                            </View>

                            <View style={{ alignItems: 'center', marginTop: 50 }} >
                                <TouchableOpacity style={styles.btnLogin}>
                                    <Text style={styles.textBtnLogin} onPress={() => Actions.registerTow()}>Tiếp tục</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginBottom:20 }}>
                                <TouchableOpacity style={styles.btnForget} >
                                    <Image style={{ margin: 3 }} source={IconPlus} />
                                    <Text style={styles.textBottom} onPress={() => Actions.login()} >Đăng nhập</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnRegister}>
                                    <Image style={{ margin: 3 }} source={IconPlus} />
                                    <Text style={styles.textBottom} >Quên mật khẩu</Text>
                                </TouchableOpacity>
                            </View>

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
        margin:13,
        
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
    },
    textBtnLogin: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
    fontWeight:'bold'
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
        marginLeft:10
    },
});
export default RegisterScreen;