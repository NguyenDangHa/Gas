import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView
} from 'react-native';
import IconUser from '../../images/userIcon.png';
import IconLock from '../../images/iconLock.png';
import IconPlus from '../../images/plus.png';
import IconMXN from '../../images/IconMXN.png';
import IconMKM from '../../images/iconMKM.png';
import ImageQMK from '../../images/ImgQMK.png';
import ImageDMKTC from '../../images/ImgMKTC.png';
import TheGioiGas from '../../images/TheGioiGas.png';
import Slideshow from 'react-native-image-slider-show';
import styles from '../../assets/styles/loginScreen.style';
import { Actions } from 'react-native-router-flux';
const { width: WIDTH } = Dimensions.get('window')

class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPass: true,
            press: false,
            email: '',
            password: '',
            isVisible: false,
            isVisibleTow: false,
            position: 1,
            interval: null,
            dataSource: [
                {

                    url: 'http://placeimg.com/640/480/any',
                }, {

                    url: 'http://placeimg.com/650/480/any',
                }, {

                    url: 'http://placeimg.com/670/480/any',
                },
            ],
        }
    }
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={styles.backgroundContainer}>
                <Image style={styles.textTop} source={TheGioiGas} />

                <View style={styles.slideShow}>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} />
                </View>


                <ScrollView>
                    <View style={styles.loginUnderBottom}>
                        <View style={styles.TextLogin}>
                            <Text style={styles.textItem1}>Đăng nhập</Text>
                            <Text style={styles.textItem2}>Dành cho Đại lý & Khách hàng công nghiệp</Text>
                        </View>
                        <View >
                            <TextInput
                                style={styles.input}
                                placeholder="vunguyen@thegioigas.vn"
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                secureTextEntry={true}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                keyboardType="email-address">
                            </TextInput>
                            <Image style={styles.iconImage} source={IconUser} />
                        </View>

                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder={'*********'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={'grey'}
                                underLineColorAndroid='transparent'
                                autoCapitalize="none"
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password}
                                keyboardType="numeric">
                            </TextInput>
                            <Image style={styles.iconImage} source={IconLock} />
                        </View>
                        <TouchableOpacity onPress={() => Actions.home()}>
                            <View style={styles.btnLogin}>
                                <Text style={styles.textBtnLogin} >Đăng Nhập</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.btnBottom}>
                            <TouchableOpacity style={styles.btnForget} >
                                <Image style={styles.btnUnder}  source={IconPlus} />
                                <Text style={styles.textBottom} onPress={() => Actions.register()} >Đăng ký</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnRegister}
                                onPress={async () => { await this.setState({ isVisible: true }); }}>
                                <Image style={styles.btnUnder} source={IconPlus} />
                                <Text style={styles.textBottom} >Quên mật khẩu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => { this.setState({ isVisible: true }) }}>
                    <View style={styles.modal}>
                        <View style={styles.modal1Container}>
                            <Image style={styles.modal1Image} source={ImageQMK} />
                            <View style={{ marginVertical: 10 }}>
                                <Text style={styles.modal1Text1}>Mã xác nhận đã được gửi  đến số điện thoại đăng ký : 0909667788.</Text>
                                <Text style={styles.modal1Text2}>Vui lòng kiểm tra tin nhắn hoặc liên hệ nhân viên để được hỗ trợ. </Text>

                                <View >
                                    <TextInput
                                        style={styles.inputModal}
                                        placeholder="Mã xác nhận"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none"
                                        secureTextEntry={false}>
                                    </TextInput>
                                    <Image style={styles.modal1Icon} source={IconMXN} />
                                </View>

                                <View >
                                    <TextInput
                                        style={styles.inputModal}
                                        placeholder="Mật khẩu mới"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none"
                                        secureTextEntry={true}>
                                    </TextInput>
                                    <Image style={styles.modal1Icon} source={IconMKM} />
                                </View>

                                <View >
                                    <TextInput
                                        style={styles.inputModal}
                                        placeholder="Xác nhận mật khẩu mới"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none"
                                        secureTextEntry={true}>
                                    </TextInput>
                                    <Image style={styles.modal1Icon} source={IconMKM} />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.btnClose} onPress={async () => { await this.setState({ isVisible: false }); this.setState({ isVisibleTow: true }) }}>
                                <View style={{ alignItems: 'center'}} >
                                    <Text style={styles.textBtnClose} >Lưu</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isVisibleTow}
                    onRequestClose={() => { this.setState({ isVisibleTow: false }) }}>
                    <View style={styles.modal2}>
                        <View style={styles.modal1Container}>
                            <Image style={styles.modal2Image} source={ImageDMKTC} />
                            <View style={styles.modal2Bottom}>
                                <Text style={styles.modal2TextItem1}>Đổi mật khẩu mới thành công !</Text>
                                <Text style={styles.modal2TextItem2}>Mời bạn đăng nhập lại bằng mật khẩu mới vừa đổi </Text>
                            </View>
                            <TouchableOpacity style={styles.btnClose} onPress={async () => { await this.setState({ isVisibleTow: false }) }}>
                                <View style={{ alignItems: 'center' }} >
                                    <Text style={styles.textBtnClose} >Đăng nhập lại</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        );

    }
}
export default LoginScreen;