import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import Black from '../../images/maVachBlack.png';
import White from '../../images/whiteCode.png';
import BarCode from '../../images/ImageBarCode.png';
import ImageTop from '../../images/ImageCheck.png';
import { Actions } from 'react-native-router-flux';
import IconMua from '../../images/iconMua.png';
import IconMuaUnCheck from '../../images/iconMuaUncheck.png';

import IconKiemtra from '../../images/iconKiemTra2.png';
import IconCheckKiemtra from '../../images/iconKTraCheck.png';

import IconTaiKhoan from '../../images/icAccount.png';
import IconTaiKhoanCheck from '../../images/iconAccountCheck.png';


class CheckScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkMuaHang: false,
      checkKiemTra: true,
      checkTaiKhoan: false
    }
  }
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <ScrollView>
        <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
          <Text></Text>
          <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Kiểm tra xuất xứ</Text>
          <TouchableOpacity onPress={() => Actions.notifications()}>
            <Image source={IconNotifications} style={{ marginRight: 10,width:30,height: 30, }} />
          </TouchableOpacity>
        </View>
        <Image style={{ width: 414, height: 200 }} source={ImageTop} />

        <View style={styles.container}>
          <Text style={{marginTop:20, height: 60, width: 384, fontSize: 15, color: 'rgb(0,0,0)', lineHeight: 25, letterSpacing: 0.56 }}>Vui lòng quét mã hoặc nhập mã vạch trên bình gas{'\n'} để kiểm tra</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Nhập mã vạch trên bình gas tại đây"
              placeholderTextColor={'grey'}
              underLineColorAndroid='transparent'
              autoCapitalize="none"
              secureTextEntry={true}>
            </TextInput>
            <Image style={{ width: 23, height: 22, marginLeft: 5, position: 'absolute', top: 33, left: 37, }} source={Black} />
          </View>

          <TouchableOpacity onPress={() => Actions.checkbarcode()}>
            <View style={{ width: 328, height: 46, backgroundColor: 'rgb(186,12,47)', borderRadius: 23, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 28, height: 27, marginLeft: 5, position: 'absolute', left: 10, }} source={White} />
              <Text style={{ width: 90, height: 18, color: '(rgb(255,255,255)', fontSize: 14, letterSpacing: 0.58 }}>Kiểm tra mã </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ width: 328, height: 46, backgroundColor: 'rgb(186,12,47)', borderRadius: 23, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 28, height: 27, marginLeft: 5, position: 'absolute', left: 10, }} source={BarCode} />
              <Text style={{ width: 102, height: 18, color: '(rgb(255,255,255)', fontSize: 14, letterSpacing: 0.58 }}>Quét mã vạch </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ borderWidth: 1, borderColor: 'rgb(211,23,61)', marginTop: 181, height: 70, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', backgroundColor: 'rgb(255,255,255)' }}>
          <View style={{ marginLeft: 15, alignItems: 'center' }}>
            <TouchableOpacity 
            onPress={() => this.setState({ checkMuaHang: !this.state.checkMuaHang, checkKiemTra: this.state.checkMuaHang, checkTaiKhoan: this.state.checkMuaHang},Actions.home())}>
              <Image source={this.state.checkMuaHang ? IconMua : IconMuaUnCheck} style={{ width: 35, height: 35,marginLeft:15 }} />
              <Text style={{ marginBottom: 5 }}>MUA HÀNG</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
            onPress={() => this.setState({ checkKiemTra: !this.state.checkKiemTra, checkMuaHang:this.state.checkKiemTra,checkTaiKhoan: this.state.checkKiemTra })}>
              <Image source={this.state.checkKiemTra ? IconCheckKiemtra : IconKiemtra} style={{ width: 35, height: 35,marginLeft:15  }} />
              <Text style={{ marginBottom: 5 }}>KIỂM TRA</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginRight: 15 }}>
            <TouchableOpacity
            onPress={() => this.setState({ checkTaiKhoan: !this.state.checkTaiKhoan, checkMuaHang: this.state.checkTaiKhoan, checkKiemTra: this.state.checkTaiKhoan },Actions.account())}>
              <Image source={IconTaiKhoan} source={this.state.checkTaiKhoan ? IconTaiKhoanCheck : IconTaiKhoan} style={{ width: 35, height: 35,marginLeft:15  }} />
              <Text style={{ marginBottom: 5 }}>TÀI KHOẢN</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
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
});

export default CheckScreen;