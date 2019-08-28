import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import IconNotifications from '../../images/notificationIcon.png';
import IconPhone from '../../images/iconPhone.png';
import IconChat from '../../images/iconChat.png';
import ImageContact from '../../images/ImageContact.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/contactScreen.style';

class ContactScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Liên hệ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <Image style={styles.imageTop} source={ImageContact} />

                <View style={styles.container}>
                    <Text style={styles.textContainer}>
                        Vui lòng điện cho Tổng đài hoặc Gởi tin nhắn cho chúng tôi bằng cách nhấn vào một trong hai nút dưới đây:
                    </Text>

                    <TouchableOpacity >
                        <View style={styles.btnText}>
                            <Image style={styles.imageBtn} source={IconPhone} />
                            <Text style={styles.textBtn}>Điện thoại cho tổng đài </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.message()}>
                        <View style={styles.btnText}>
                            <Image style={styles.imageBtn} source={IconChat} />
                            <Text style={styles.textBtn}>Gửi tin nhắn cho chúng tôi </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ContactScreen;