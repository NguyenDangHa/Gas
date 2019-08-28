import React, { Component } from 'react';
import {
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
import styles from '../../assets/styles/editPassScreen.style';
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
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Đổi mật khẩu</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <Image style={styles.imageTop} source={ImageClock} />

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
                        <Image style={styles.textImage} source={IconMKHT} />
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
                        <Image style={styles.textImage} source={IconMKM} />
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
                        <Image style={styles.textImage} source={IconMKM} />
                    </View>
                </View>
                <View style={styles.btnBottom} >
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
                        <View style={styles.modelContainer}>
                            <Image style={styles.modalImage} source={ImageSucess} />
                            <Text style={styles.modalText}>Mật khẩu đã được đổi thành công !</Text>
                            <View style={styles.modalBtn} >
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
export default EditPassWord;