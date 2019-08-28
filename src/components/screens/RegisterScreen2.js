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
import IconPin from '../../images/pinIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/registerScreen2.style';
const { width: WIDTH } = Dimensions.get('window')

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
                            <View style={{ alignItems: 'center',marginBottom:20 }}>
                                <Text style={styles.contentText1}>Bước 2: Thông tin địa chỉ</Text>
                                <Text style={styles.contentText2}>Vui lòng điền thông tin địa chỉ của đại lý</Text>
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
                                        placeholder="Tỉnh thành"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none">
                                    </TextInput>

                                </View>

                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Quận/huyện"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none">
                                    </TextInput>

                                </View>

                                <View>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Tọa độ"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none"
                                        secureTextEntry={true}>
                                    </TextInput>
                                    <Image style={styles.iconInput} source={IconPin} />
                                </View>

                                <View style={{alignItems: 'center',marginTop: 50 }} >
                                    <TouchableOpacity style={styles.btnLogin}>
                                        <Text style={styles.textBtnLogin} onPress={() => Actions.registerThree()}>Tiếp tục</Text>
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
export default RegisterScreen2;