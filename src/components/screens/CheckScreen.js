import React, { Component } from 'react';
import {
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
import styles from '../../assets/styles/checkScreen.style';

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
          <View style={styles.topView}>
            <Text></Text>
            <Text style={styles.topText}>Kiểm tra xuất xứ</Text>
            <TouchableOpacity onPress={() => Actions.notifications()}>
              <Image source={IconNotifications} style={styles.notification} />
            </TouchableOpacity>
          </View>

          <Image style={styles.imageTop} source={ImageTop} />

          <View style={styles.container}>
            <Text style={styles.textContainer}>
              Vui lòng quét mã hoặc nhập mã vạch trên bình gas{'\n'} để kiểm tra
            </Text>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Nhập mã vạch trên bình gas tại đây"
                placeholderTextColor={'grey'}
                underLineColorAndroid='transparent'
                autoCapitalize="none"
                secureTextEntry={true}>
              </TextInput>
              <Image style={styles.imageInput} source={Black} />
            </View>

            <TouchableOpacity onPress={() => Actions.checkbarcode()}>
              <View style={styles.checkCode}>
                <Image style={styles.imageCheckCode} source={White} />
                <Text style={styles.textCheckCode}>Kiểm tra mã </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.checkCode}>
                <Image style={styles.imageCheckCode} source={BarCode} />
                <Text style={styles.textCheckCode}>Quét mã vạch </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.bottomView}>
          <View style={styles.childrenBottomView}>
            <TouchableOpacity
              onPress={() => this.setState({ checkMuaHang: !this.state.checkMuaHang, checkKiemTra: this.state.checkMuaHang, checkTaiKhoan: this.state.checkMuaHang },Actions.home())}>
              <Image source={this.state.checkMuaHang ? IconMua : IconMuaUnCheck} style={styles.imageIcon} />
              <Text>MUA HÀNG</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.childrenBottomView}>
            <TouchableOpacity
              onPress={() => this.setState({ checkKiemTra: !this.state.checkKiemTra, checkMuaHang: this.state.checkKiemTra, checkTaiKhoan: this.state.checkKiemTra }, Actions.check())}>
              <Image source={this.state.checkKiemTra ? IconCheckKiemtra : IconKiemtra} style={styles.imageIcon} />
              <Text>KIỂM TRA</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.childrenBottomView}>
            <TouchableOpacity
              onPress={() => this.setState({ checkTaiKhoan: !this.state.checkTaiKhoan, checkMuaHang: this.state.checkTaiKhoan, checkKiemTra: this.state.checkTaiKhoan }, Actions.account())}>
              <Image source={IconTaiKhoan} source={this.state.checkTaiKhoan ? IconTaiKhoanCheck : IconTaiKhoan} style={styles.imageIcon} />
              <Text>TÀI KHOẢN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  }
}

export default CheckScreen;