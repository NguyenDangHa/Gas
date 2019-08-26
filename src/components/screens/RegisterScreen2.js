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
import IconAddress from '../../images/addressIcon.png';
import IconPin from '../../images/pinIcon.png';
import IconPlus from '../../images/plus.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux'; 
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

                <View style={{flexDirection:'row',marginTop:30}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => Actions.register()} ><Image source={IconBack}></Image></TouchableOpacity>
                    <Text style={{color: 'rgb(255,255,255)',fontSize: 35,flex:2}}>thegioigas</Text>
                </View>

                <View style={styles.container}>
                    <View style={{ width:'100%',height: 80, backgroundColor: 'rgb(186,12,47)', alignItems: 'center', borderTopLeftRadius: 10,borderTopRightRadius: 10}}>
                        <Text style={{ fontSize: 20, color: 'rgb(255,255,255)', marginBottom: 10, marginTop: 10 }}>Đăng ký tài khoản</Text>
                        <Text style={{ fontSize: 12, color: 'rgb(255,255,255)' }}>Dành cho Đại lý & Khách hàng Công nghiệp</Text>
                    </View>

                    <View style={{height:560, backgroundColor: 'rgb(255,255,255)', alignItems: 'center',borderBottomLeftRadius:10,borderBottomRightRadius:10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'rgb(186,12,47)', fontSize: 15, margin: 20 }}>Bước 2: Thông tin địa chỉ</Text>
                            <Text style={{ fontSize: 15 }}>Vui lòng điền thông tin địa chỉ của đại lý</Text>
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
                                    <Image style={{ marginLeft: 5, position: 'absolute', top: 30, left: 37, }} source={IconPin} />
                                </View>

                                <View style={{ alignItems: 'center', marginTop: 50 }} >
                                    <TouchableOpacity style={styles.btnLogin}>
                                        <Text style={styles.textBtnLogin}  onPress={() => Actions.registerThree()}>Tiếp tục</Text>
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
        margin:15
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
    },
});
export default RegisterScreen2;