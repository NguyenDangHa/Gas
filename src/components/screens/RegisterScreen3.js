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
import IconAddress from '../../images/addressIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
const { width: WIDTH } = Dimensions.get('window');
import IconUnCheck from '../../images/iconUncheck.png';
import IconCheck from '../../images/iconCheck.png';
import styles from '../../assets/styles/registerScreen3.style';

class RegisterScreen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            check1: false,
            check2: false
        }
    }

    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.register()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>thegioigas</Text>
                    <Text></Text>
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.topContainer}>
                            <Text style={styles.topText1}>Đăng ký tài khoản</Text>
                            <Text style={styles.topText2}>Dành cho Đại lý & Khách hàng Công nghiệp</Text>
                        </View>

                        <View style={styles.content}>
                            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                                <Text style={styles.contentText1}>Bước 3: Thông tin kinh doanh</Text>
                                <Text style={styles.contentText2}>Vui lòng điền thông tin kinh doanh của đại lý</Text>
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
                                    <Image style={styles.iconInput} source={IconAddress} />
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
                                <View style={styles.viewBottom}>
                                    <Text style={styles.textGiaoGa}>Giao ga tự động</Text>
                                    <TouchableOpacity style={styles.btnYes}>
                                        <Text style={styles.textBtnLogin}>Có</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.btnNo}>
                                        <Text style={styles.textBtnLogin}>Không</Text>
                                    </TouchableOpacity>

                                </View>
                                <View>
                                    <View style={styles.checkBox}>
                                        <TouchableOpacity
                                            onPress={() => this.setState({ checked1: !this.state.checked1 })}>
                                            <Image style={styles.iconCheck} source={this.state.checked1 ? IconCheck : IconUnCheck} />
                                        </TouchableOpacity>
                                        <Text style={styles.textCheck}> Tôi là chủ đơn vị</Text>
                                    </View>

                                    <View style={styles.checkBox}>
                                        <TouchableOpacity
                                            onPress={() => this.setState({ checked2: !this.state.checked2 })}>
                                            <Image style={styles.iconCheck} source={this.state.checked2 ? IconCheck : IconUnCheck} />
                                        </TouchableOpacity>
                                        <Text style={styles.textCheck}> Tôi đồng ý tuân thủ các quy định của </Text>
                                        <TouchableOpacity>
                                            <Text style={styles.textCheck2}>Thế giới Gas</Text>
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
                </ScrollView>
            </View>
        );

    }
}
export default RegisterScreen2;