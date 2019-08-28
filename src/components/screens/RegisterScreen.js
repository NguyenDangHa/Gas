import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import IconChat from '../../images/chatIcon.png';
import IconPhone from '../../images/phoneIcon.png';
import IconMail from '../../images/mailIcon.png';
import IconPlus from '../../images/plus.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/registerScreen.style';
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
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.appName}>thegioigas</Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.topContainer}>
                            <Text style={styles.topText1}>Đăng ký tài khoản</Text>
                            <Text style={styles.topText2}>Dành cho Đại lý & Khách hàng Công nghiệp</Text>
                        </View>

                        <View style={styles.content}>
                            <View style={{alignItems: 'center',marginBottom: 20}}>
                                <Text style={styles.contentText1}>Bước 1: Thông tin tài khoản</Text>
                                <Text style={styles.contentText2}>Vui lòng điền thông tin đại lý, khách công nghiệp</Text>
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
                                    <Image style={styles.iconInput} source={IconChat} />
                                </View>

                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Điện thoại"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none">
                                    </TextInput>
                                    <Image style={styles.iconInput} source={IconPhone} />
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
                                    <Image style={styles.iconInput} source={IconMail} />
                                </View>

                                <View style={styles.btnContinue} >
                                    <TouchableOpacity style={styles.btnLogin}>
                                        <Text style={styles.textBtnLogin} onPress={() => Actions.registerTow()}>Tiếp tục</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.btnBottom}>
                                    <TouchableOpacity style={styles.btnForget} >
                                        <Image style={styles.btnUnder} source={IconPlus} />
                                        <Text style={styles.textBottom} onPress={() => Actions.login()} >Đăng nhập</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.btnRegister}>
                                        <Image style={styles.btnUnder} source={IconPlus} />
                                        <Text style={styles.textBottom} >Quên mật khẩu</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );

    }
}
export default RegisterScreen;