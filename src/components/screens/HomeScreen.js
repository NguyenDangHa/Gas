import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
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
import styles from '../../assets/styles/homeScreen.style';

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
          <View style={styles.topView}>
            <Text style={styles.topText}>thegioigas</Text>
            <Text></Text>
            <TouchableOpacity onPress={() => Actions.notifications()}>
              <Image style={styles.notification} source={IconNotifications} ></Image>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.slideshow}>
              <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
            </View>
            <View>
              <Text style={styles.textMuaHang}>MUA HÀNG</Text>
              <Text numberOfLines={1} style={styles.textGach}>
                ______________________________________________________________
          </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center',width:'100%' }}>
              <TouchableOpacity onPress={() => Actions.purchaseinfo()} style={styles.btnDatMua}>
                <Image source={datHang}></Image>
                <Text style={styles.textDatMua}>Đặt mua</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Actions.receive()} style={styles.btnNhanHang}>
                <Image source={nhanHang} />
                <Text style={styles.textNhanHang}>Nhận hàng</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Actions.history()} style={styles.btnLichSuMH}>
                <Image source={lichsu}></Image>
                <Text style={styles.textLichSuMH}>Lịch sử {'\n'}mua hàng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomView}>
          <View style={styles.childrenBottomView}>
            <TouchableOpacity
              onPress={() => this.setState({ checkMuaHang: !this.state.checkMuaHang, checkKiemTra: this.state.checkMuaHang, checkTaiKhoan: this.state.checkMuaHang },Actions.home())}>
              <Image source={this.state.checkMuaHang ? IconMua : IconMuaUnCheck} style={styles.imageIcon} />
              <Text >MUA HÀNG</Text>
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
    )
  }

}

export default HomeScreen;  