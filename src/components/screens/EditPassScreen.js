import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Modal
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import IconMKHT from '../../images/iconMKHT.png';
import IconMKM from '../../images/iconMKM.png';
import ImageClock from '../../images/ImgEditPass.png';
import ImageSucess from '../../images/ImageSucess.png';
import { Actions } from 'react-native-router-flux';



class EditPassWord extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Đổi mật khẩu</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={{ marginRight: 10,width:30,height:30 }} />
                    </TouchableOpacity>
                </View>
                <Image style={{ width: 414, height: 200 }} source={ImageClock} />

                <View style={styles.container}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Mật khẩu hiện tại"
                            placeholderTextColor={'grey'}
                            underLineColorAndroid='transparent'
                            autoCapitalize="none"
                            secureTextEntry={true}>
                        </TextInput>
                        <Image style={{ width: 23, height: 22, marginLeft: 5, position: 'absolute', top: 33, left: 37, }} source={IconMKHT} />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Mật khẩu mới"
                            placeholderTextColor={'grey'}
                            underLineColorAndroid='transparent'
                            autoCapitalize="none"
                            secureTextEntry={true}>
                        </TextInput>
                        <Image style={{ width: 23, height: 22, marginLeft: 5, position: 'absolute', top: 33, left: 37, }} source={IconMKM} />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Nhập lại mật khẩu mới"
                            placeholderTextColor={'grey'}
                            underLineColorAndroid='transparent'
                            autoCapitalize="none"
                            secureTextEntry={true}>
                        </TextInput>
                        <Image style={{ width: 23, height: 22, marginLeft: 5, position: 'absolute', top: 33, left: 37, }} source={IconMKM} />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: 50, paddingBottom: 40 }} >
                    <TouchableOpacity style={styles.btnEditPass} onPress={async () => { await this.setState({ isVisible: true }); }}>
                        <Text style={styles.textBtnEditPass}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>


                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => { this.setState({ isVisible: true }) }}>
                    <View style={styles.modal}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 110, height: 110, justifyContent: 'center', borderRadius: 60,marginBottom:20 }} source={ImageSucess} />

                            <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 1, color: 'rgb(0,0,0)', marginTop: 10, marginBottom: 20, marginLeft: 20 }}>Mật khẩu đã được đổi thành công !</Text>
                            <View style={{ alignItems: 'center', marginTop: 20, }} >
                                <TouchableOpacity style={styles.btnClose} onPress={async () => { await this.setState({ isVisible: false });}}>
                                    <Text style={styles.textBtnClose} >Đóng</Text>
                                </TouchableOpacity>
                            </View>
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
    btnEditPass: {
        width: 195,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnEditPass: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.58,
        fontSize: 14,
        fontWeight: 'bold'
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
        letterSpacing:0.56,
        fontWeight:'bold'
    },
    modal: {
        marginTop: 200,
        height: 300,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default EditPassWord;