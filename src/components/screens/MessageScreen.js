import React, { Component } from 'react';
import {
    StyleSheet,
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
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.contact()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Đổi mật khẩu</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={{ marginRight: 10,width: 30,height: 30, }} />
                    </TouchableOpacity>
                </View>
                <Image style={{ width: 414, height: 200 }} source={ImageMessage} />

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
                        <Image style={{ width: 27, height: 26, marginLeft: 5, position: 'absolute', top: 30, left: 37, }} source={IconTD} />
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
                        <Image style={{width:25,height:24, position: 'absolute', left: 20,}} source={IconGT}/>
                        <Text style={styles.textBtnSent}>Gửi tin</Text>
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
    input: {
        paddingLeft: 50,
        marginTop: 20,
        width: 384,
        height: 46,
        borderRadius: 25,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
    },
    input2: {
        marginTop: 20,
        width: 384,
        height: 115,
        borderRadius: 15,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgb(0,0,0)',
        marginHorizontal: 25,
    },
    btnSent: {
        width: 163,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnSent: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        letterSpacing: 0.58,
        fontSize: 14,
        fontWeight: 'bold',
        fontWeight: 'bold'
    },
});

export default MessageScreen;