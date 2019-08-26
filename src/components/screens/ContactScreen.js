import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import IconNotifications from '../../images/notificationIcon.png';
import IconPhone from '../../images/iconPhone.png';
import IconChat from '../../images/iconChat.png';
import ImageContact from '../../images/ImageContact.png';
import { Actions } from 'react-native-router-flux';



class ContactScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Liên hệ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={{ marginRight: 10,width: 30,height:30 }} />
                    </TouchableOpacity>
                </View>
                <Image style={{ width: 414, height: 200 }} source={ImageContact} />

                <View style={styles.container}>
                    <Text style={{ width: 350, margin: 30, height: 80, fontSize: 15, color: 'rgb(0,0,0)', lineHeight: 25, letterSpacing: 0.56 }}>
                        Vui lòng điện cho Tổng đài hoặc Gởi tin nhắn {'\n'} cho chúng tôi bằng cách nhấn vào một trong{'\n'} hai nút dưới đây:
                    </Text>

                    <TouchableOpacity >
                        <View style={{ width: 350, height: 46, backgroundColor: 'rgb(186,12,47)', borderRadius: 23, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 28, height: 27, marginLeft: 5, position: 'absolute', left: 10, }} source={IconPhone} />
                            <Text style={{ fontWeight: 'bold', width: 173, height: 18, color: '(rgb(255,255,255)', fontSize: 14, letterSpacing: 0.58 }}>Điện thoại cho tổng đài </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.message()}>
                        <View style={{ width: 350, height: 46, backgroundColor: 'rgb(186,12,47)', borderRadius: 23, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 28, height: 27, marginLeft: 5, position: 'absolute', left: 10, }} source={IconChat} />
                            <Text style={{ fontWeight: 'bold', width: 173, height: 18, color: '(rgb(255,255,255)', fontSize: 14, letterSpacing: 0.58 }}>Gửi tin nhắn cho chúng tôi </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
});

export default ContactScreen;