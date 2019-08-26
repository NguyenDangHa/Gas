import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import IconNotifications from '../../images/notificationIcon.png';
import datHang from '../../images/menuIcon02.png';
import nhanHang from '../../images/menuIcon03.png';
import lichsu from '../../images/menuIcon04.png';
import IconMua from '../../images/iconMua.png';
import IconMuaUnCheck from '../../images/iconMuaUncheck.png';
import IconKiemtra from '../../images/iconKiemTra2.png';
import IconCheckKiemtra from '../../images/iconKTraCheck.png';
import IconTaiKhoan from '../../images/icAccount.png';
import IconTaiKhoanCheck from '../../images/iconAccountCheck.png';
import Slideshow from 'react-native-image-slider-show';



class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkMuaHang: true,
      checkKiemTra: false,
      checkTaiKhoan: false,
      position: 1,
      interval: null,
      dataSource: [
        {

          url: 'http://placeimg.com/640/480/any',
        }, {

          url: 'http://placeimg.com/650/480/any',
        }, {

          url: 'http://placeimg.com/670/480/any',
        },
      ],
    }
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (

      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: 'row', width: '100%', marginTop: 10, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', letterSpacing: 0.75, color: 'rgb(255,255,255)', fontSize: 20, marginLeft: 15, fontWeight: 'bold' }}>thegioigas</Text>
            <Text></Text>
            <TouchableOpacity onPress={() => Actions.notifications()}>
              <Image style={{ marginRight: 15, width: 30, height: 30 }} source={IconNotifications} ></Image>
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <View style={styles.Slideshow}>
              <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
            </View>
            <View>
              <Text style={{ marginLeft: 15, color: 'rgb(255,255,255)', fontSize: 20, lineHeight: 28, letterSpacing: 0.73, }}>MUA HÀNG</Text>
              <Text numberOfLines={1} style={{ color: 'rgb(243,243,243)', justifyContent: 'center', alignContent: 'center', marginBottom: 15, textAlign: 'center' }}>
                ______________________________________________________________
          </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <TouchableOpacity onPress={() => Actions.purchaseinfo()} style={{ width: 110, height: 130, borderRadius: 10, backgroundColor: 'rgb(255,255,255)', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={datHang}></Image>
                <Text style={{ fontSize: 14, alignItems: 'center', letterSpacing: 0.51, color: 'rgb(109,114,120)' }}>Đặt mua</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Actions.receive()} style={{ marginLeft: 15, marginRight: 15, width: 110, height: 130, borderRadius: 10, backgroundColor: 'rgb(255,255,255)', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={nhanHang} />
                <Text style={{ fontSize: 14, alignItems: 'center', letterSpacing: 0.51, color: 'rgb(109,114,120)' }}>Nhận hàng</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Actions.history()} style={{ width: 110, height: 130, borderRadius: 10, backgroundColor: 'rgb(255,255,255)', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={lichsu}></Image>
                <Text style={{ fontSize: 14, alignItems: 'center', letterSpacing: 0.51, color: 'rgb(109,114,120)' }}>Lịch sử {'\n'}mua hàng</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.BottomView}>
            <View style={{ marginLeft: 15, alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.setState({ checkMuaHang: !this.state.checkMuaHang, checkKiemTra: this.state.checkMuaHang, checkTaiKhoan: this.state.checkMuaHang })}>
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
                onPress={() => this.setState({ checkTaiKhoan: !this.state.checkTaiKhoan, checkMuaHang: this.state.checkTaiKhoan, checkKiemTra: this.state.checkTaiKhoan }, Actions.account())}>
                <Image source={IconTaiKhoan} source={this.state.checkTaiKhoan ? IconTaiKhoanCheck : IconTaiKhoan} style={{ width: 30, height: 30, marginLeft: 15 }} />
                <Text style={{ marginBottom: 5 }}>TÀI KHOẢN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: 'rgb(255,130,0)',
    justifyContent:'center'

  },
  Slideshow: {
    width: 414,
    height: 250,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  BottomView: {
    borderWidth: 1,
    borderColor: 'rgb(211,23,61)',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgb(255,255,255)',
    marginTop:203
  }
});

export default HomeScreen;  