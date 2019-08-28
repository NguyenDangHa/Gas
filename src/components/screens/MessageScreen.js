import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import IconTD from '../../images/iconTieuDe.png';
import IconGT from '../../images/iconGuiTin.png';
import ImageMessage from '../../images/ImageMessage.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/messageScreen.style';

class MessageScreen extends Component {
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
                    <TouchableOpacity onPress={() => Actions.contact()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Nhắn tin</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <Image style={styles.imageTop} source={ImageMessage} />

                <View style={styles.container}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Tiêu Đề"
                            placeholderTextColor={'grey'}
                            underLineColorAndroid='transparent'
                            autoCapitalize="none"
                            secureTextEntry={true}>
                        </TextInput>
                        <Image style={styles.iconTD} source={IconTD} />
                    </View>
                    <View style={{alignItems:'flex-start'}}>
                        <TextInput
                            style={styles.input2}
                            placeholder="Nhập nội dung tin nhắn vào đây"
                            placeholderTextColor={'grey'}
                            underLineColorAndroid='transparent'
                            autoCapitalize="none"
                            secureTextEntry={true}>
                        </TextInput>
                        </View>                   
                </View>

                <View style={{justifyContent:'center', marginTop: 30, paddingBottom: 40,flexDirection:'row' }} >
                    <TouchableOpacity style={styles.btnSent} >
                        <Image style={styles.iconSent} source={IconGT}/>
                        <Text style={styles.textBtnSent}>Gửi tin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default MessageScreen;