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
    Modal,
    ScrollView
} from 'react-native';
import bepGas from '../../images/bepGas.png';
import IconUser from '../../images/userIcon.png';
import IconLock from '../../images/iconLock.png';
import IconPlus from '../../images/plus.png';
import IconMXN from '../../images/IconMXN.png';
import IconMKM from '../../images/iconMKM.png';
import ImageQMK from '../../images/ImgQMK.png';
import ImageDMKTC from '../../images/ImgMKTC.png';
import TheGioiGas from '../../images/TheGioiGas.png';
import Slideshow from 'react-native-image-slider-show';

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
                <Image style={{ width: '100%', height: 76, }} source={TheGioiGas} />

                <View style={styles.Slideshow}>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} />
                </View>


                <ScrollView>
                    <View style={styles.loginUnderBottom}>
                        <View style={styles.TextLogin}>
                            <Text style={{ fontSize: 20, color: 'rgb(255,255,255)' }}>Đăng nhập</Text>
                            <Text style={{ fontSize: 15, color: 'rgb(255,255,255)' }}>Dành cho Đại lý & Khách hàng công nghiệp</Text>
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
                            <Image style={{ width: 22, height: 22, marginLeft: 5, position: 'absolute', top: 20, left: 37, }} source={IconUser} />
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
                            <Image style={{ width: 22, height: 22, marginLeft: 5, position: 'absolute', top: 20, left: 37, }} source={IconLock} />
                        </View>
                        <TouchableOpacity onPress={() => Actions.home()}>
                            <View style={styles.btnLogin}>
                                <Text style={styles.textBtnLogin} >Đăng Nhập</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                            <TouchableOpacity style={styles.btnForget} >
                                <Image style={{ margin: 3 }} source={IconPlus} />
                                <Text style={styles.textBottom} onPress={() => Actions.register()} >Đăng ký</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnRegister}
                                onPress={async () => { await this.setState({ isVisible: true }); }}>
                                <Image style={{ margin: 3 }} source={IconPlus} />
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
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 110, height: 110, justifyContent: 'center', borderRadius: 65 }} source={ImageQMK} />
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)', marginTop: 10, marginBottom: 10, marginLeft: 20 }}>Mã xác nhận đã được gửi  đến số điện thoại đăng ký : 0909667788.</Text>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(74,74,74)', marginLeft: 50 }}>Vui lòng kiểm tra tin nhắn hoặc liên hệ nhân viên để được hỗ trợ. </Text>

                                <View >
                                    <TextInput
                                        style={styles.inputModal}
                                        placeholder="Mã xác nhận"
                                        placeholderTextColor={'grey'}
                                        underLineColorAndroid='transparent'
                                        autoCapitalize="none"
                                        secureTextEntry={false}>
                                    </TextInput>
                                    <Image style={{ width: 22, height: 22, marginLeft: 5, position: 'absolute', top: 20, left: 37, }} source={IconMXN} />
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
                                    <Image style={{ width: 22, height: 22, marginLeft: 5, position: 'absolute', top: 20, left: 37, }} source={IconMKM} />
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
                                    <Image style={{ width: 22, height: 22, marginLeft: 5, position: 'absolute', top: 20, left: 37, }} source={IconMKM} />
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
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 110, height: 110, justifyContent: 'center', borderRadius: 65 }} source={ImageDMKTC} />
                            <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)', marginTop: 10, marginBottom: 10, marginLeft: 20 }}>Đổi mật khẩu mới thành công !</Text>
                                <Text style={{ fontSize: 15, letterSpacing: 1, color: 'rgb(74,74,74)', marginLeft: 50 }}>Mời bạn đăng nhập lại bằng mật khẩu mới vừa đổi </Text>
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

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'grey',
    },
    Slideshow: {
        width: 384,
        height: 250,
        marginTop: 15,
        borderRadius: 15,
        marginLeft: 15
    },
    TextLogin: {
        height: 105,
        width: 384,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(255,255,255)',
        marginBottom: 5,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: 'rgb(255,130,0)',
    },
    input: {
        marginBottom: 20,
        width: 328,
        height: 45,
        borderRadius: 25,
        fontSize: 20,
        paddingLeft: 55,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
        marginTop: 10
    },
    inputModal: {
        marginBottom: 15,
        width: 328,
        height: 45,
        borderRadius: 25,
        fontSize: 18,
        paddingLeft: 55,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
        marginTop: 10,
        letterSpacing: 0.78,

    },
    btnLogin: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 15,
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
        marginLeft: 10,
    },
    loginUnderBottom: {
        backgroundColor: 'rgb(255,255,255)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 15,
        width: 384,
        height: 370
    },
    modal: {
        marginTop: 20,
        height: 594,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal2: {
        marginTop: 120,
        width: 370,
        height: 360,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnClose: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnClose: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
});
export default LoginScreen;