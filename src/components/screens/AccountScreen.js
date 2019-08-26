import React, { Component } from 'react';
import {
  StyleSheet,
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
          <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
            <Text></Text>
            <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Tài khoản của bạn</Text>
            <TouchableOpacity onPress={() => Actions.notifications()}>
              <Image source={IconNotifications} style={{ marginRight: 10, width: 30, height: 30, }} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>

          </View>

          <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: 80, height: 80, borderRadius: 50 }} source={ImageProfile} />
              <Text style={{ fontSize: 20, letterSpacing: 0.75, color: 'rgb(255,130,0)' }}>Phạm Minh Trang</Text>
              <Text style={{ fontSize: 15, letterSpacing: 0.56, color: 'rgb(74,74,74)' }}>0907123269</Text>
              <Text style={{ fontSize: 15, letterSpacing: 0.56, color: 'rgb(186,12,47)' }}>Intercontinental</Text>
              <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginLeft: 10, marginRight: 15 }}>
                ______________________________________________________________</Text>
            </View>

            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={() => Actions.infoAccount()}>
                <View style={{ flexDirection: 'row', alignItems: 'center',width:364 }}>
                  <Image source={IconTT} style={{ width: 30, height: 33, borderRadius: 10, marginTop: 5 }} />
                  <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 17, letterSpacing: 0.85, color: 'rgb(74,74,74)', width: 185, height: 25 }}>Thông tin tài khoản</Text>
                  <Image source={IconDH} style={{ marginTop: 5, width: 12, height: 24, marginLeft: 110 }} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginLeft: 5, marginRight: 15 }}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.infoStore()}>
                <View style={{ flexDirection: 'row', alignItems: 'center',width:364}}>
                  <Image source={IconCH} style={{ marginTop: 5, width: 30, height: 33, borderRadius: 10 }} />
                  <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 17, letterSpacing: 0.85, color: 'rgb(74,74,74)', width: 185, height: 25 }}>Thông tin cửa hàng</Text>
                  <Image source={IconDH} style={{ marginTop: 5, width: 12, height: 24, marginLeft: 110 }} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginLeft: 5, marginRight: 15 }}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.editpass()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={IconDP} style={{ marginTop: 5, width: 30, height: 33, borderRadius: 10 }} />
                  <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 17, letterSpacing: 0.85, color: 'rgb(74,74,74)', width: 163, height: 25 }}>Đổi mật khẩu</Text>
                  <Image source={IconDH} style={{ marginTop: 5, width: 12, height: 24, marginLeft: 130 }} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginLeft: 5, marginRight: 15 }}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.termsOfUse()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={IconDK} style={{ marginTop: 5, width: 30, height: 33, borderRadius: 10 }} />
                  <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 17, letterSpacing: 0.85, color: 'rgb(74,74,74)', width: 163, height: 20 }}>Điều khoản</Text>
                  <Image source={IconDH} style={{ marginTop: 5, width: 12, height: 24, marginLeft: 130 }} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginLeft: 5, marginRight: 15 }}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.contact()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={IconLH} style={{ marginTop: 5, width: 30, height: 33, borderRadius: 10 }} />
                  <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 17, letterSpacing: 0.85, color: 'rgb(74,74,74)', width: 163, height: 25 }}>Liên Hệ</Text>
                  <Image source={IconDH} style={{ marginTop: 5, width: 12, height: 24, marginLeft: 130 }} />
                </View>
              </TouchableOpacity>
              <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', marginLeft: 5, marginRight: 15 }}>
                ______________________________________________________________</Text>

              <TouchableOpacity onPress={() => Actions.login()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={IconDX} style={{ marginTop: 5, width: 30, height: 38, borderRadius: 10 }} />
                  <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 17, letterSpacing: 0.85, color: 'rgb(74,74,74)', width: 163, height: 25 }}>Đăng xuất</Text>
                  <Image source={IconDH} style={{ marginTop: 5, width: 12, height: 24, marginLeft: 130 }} />
                </View>
              </TouchableOpacity>
            </View>

          </View>



          <View style={{ borderWidth: 1, borderColor: 'rgb(211,23,61)', marginTop: 99, height: 70, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', backgroundColor: 'rgb(255,255,255)' }}>
            <View style={{ marginLeft: 15, alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.setState({ checkMuaHang: !this.state.checkMuaHang, checkKiemTra: this.state.checkMuaHang, checkTaiKhoan: this.state.checkMuaHang }, Actions.home())}>
                <Image source={this.state.checkMuaHang ? IconMua : IconMuaUnCheck} style={{ width: 30, height: 30, marginLeft: 15 }} />
                <Text style={{ marginBottom: 5 }}>MUA HÀNG</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.setState({ checkKiemTra: !this.state.checkKiemTra, checkMuaHang: this.state.checkKiemTra, checkTaiKhoan: this.state.checkKiemTra }, Actions.check())}>
                <Image source={this.state.checkKiemTra ? IconCheckKiemtra : IconKiemtra} style={{ width: 35, height: 35, marginLeft: 15 }} />
                <Text style={{ marginBottom: 5 }}>KIỂM TRA</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => this.setState({ checkTaiKhoan: !this.state.checkTaiKhoan, checkMuaHang: this.state.checkTaiKhoan, checkKiemTra: this.state.checkTaiKhoan })}>
                <Image source={IconTaiKhoan} source={this.state.checkTaiKhoan ? IconTaiKhoanCheck : IconTaiKhoan} style={{ width: 35, height: 35, marginLeft: 15 }} />
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
    backgroundColor: 'rgb(255,187,0)'
  },
  container: {
    width: 384,
    height: 540,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 15,
    borderColor: 'rgba(0,0,0,0.5)',
    margin: 10,

  },
});


export default AccountScreen;