import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import ImageProfile from '../../images/ProfileImg.png';
import { Actions } from 'react-native-router-flux';
import IconDH from '../../images/iconDieuHuong.png';
import IconTT from '../../images/iconThongTin.png';
import IconCH from '../../images/iconCuaHang.png';
import IconDP from '../../images/iconDoiPass.png';
import IconDK from '../../images/iconDieuKhoan.png';
import IconLH from '../../images/iconLienHe.png';
import IconDX from '../../images/iconDangXuat.png';
import IconMua from '../../images/iconMua.png';
import IconMuaUnCheck from '../../images/iconMuaUncheck.png';
import IconKiemtra from '../../images/iconKiemTra2.png';
import IconCheckKiemtra from '../../images/iconKTraCheck.png';
import IconTaiKhoan from '../../images/icAccount.png';
import IconTaiKhoanCheck from '../../images/iconAccountCheck.png';
import styles from '../../assets/styles/accountScreen.style';

class AccountScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkMuaHang: false,
      checkKiemTra: false,
      checkTaiKhoan: true
    }
  }
  render() {
    return (
      <View style={styles.backgroundContainer}>
        <ScrollView>
          <View style={styles.topView}>
            <Text></Text>
            <Text style={styles.topText}>Tài khoản của bạn</Text>
            <TouchableOpacity onPress={() => Actions.notifications()}>
              <Image style={styles.notification} source={IconNotifications} ></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.imageProfile} source={ImageProfile} />
              <Text style={styles.textName}>Phạm Minh Trang</Text>
              <Text style={styles.textPhone}>0907123269</Text>
              <Text style={styles.textInter}>Intercontinental</Text>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________</Text>
            </View>

            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={() => Actions.infoAccount()}>
                <View style={styles.childrenItem}>
                  <Image source={IconTT} style={styles.iconImage} />
                  <Text style={styles.textItem}>Thông tin tài khoản</Text>
                  <Image source={IconDH} style={styles.imageItem} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.infoStore()}>
                <View style={styles.childrenItem}>
                  <Image source={IconCH} style={styles.iconImage} />
                  <Text style={styles.textItem}>Thông tin cửa hàng</Text>
                  <Image source={IconDH} style={styles.imageItem} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.editpass()}>
                <View style={styles.childrenItem}>
                  <Image source={IconDP} style={styles.iconImage} />
                  <Text style={styles.textItem}>Đổi mật khẩu</Text>
                  <Image source={IconDH} style={styles.imageItem} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.termsOfUse()}>
                <View style={styles.childrenItem}>
                  <Image source={IconDK} style={styles.iconImage} />
                  <Text style={styles.textItem}>Điều khoản</Text>
                  <Image source={IconDH} style={styles.imageItem} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.contact()}>
                <View style={styles.childrenItem}>
                  <Image source={IconLH} style={styles.iconImage} />
                  <Text style={styles.textItem}>Liên Hệ</Text>
                  <Image source={IconDH} style={styles.imageItem} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.login()}>
                <View style={styles.childrenItem}>
                  <Image source={IconDX} style={styles.iconImage} />
                  <Text style={styles.textItem}>Đăng xuất</Text>
                  <Image source={IconDH} style={styles.imageItem} />
                </View>
              </TouchableOpacity>
            </View>

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


export default AccountScreen;