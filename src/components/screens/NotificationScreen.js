import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import LogoTGGas from '../../images/logoTGGas.png';
import Logo4U from '../../images/logo4U.png';
import LogoPhiLu from '../../images/logoPhiLu.png';
import LogoVooc from '../../images/logoVooc.png';
import IconTime from '../../images/iconTime.png';
import styles from '../../assets/styles/notificationScreen.style';

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.home()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Thông báo</Text>
                    <Text></Text>
                </View>

                <View style={styles.container}>
                    <View style={styles.navigation}>
                        <Text style={styles.all}>Tất cả</Text>
                        <Text style={styles.textItems}>Đơn hàng</Text>
                        <Text style={styles.textItems}>Báo Gas</Text>
                        <Text style={styles.textItems}>Khác</Text>
                    </View>

                    <View style={{ marginLeft: 20,flex:1}}>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoTGGas} style={styles.logo} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.textItem1}>Thế Giới Gas cập nhật ứng dụng mới</Text>
                                        <Text style={styles.textItem2}>Phiên bản Thế Giới Gas 2.0 vừa được phát hành {'\n'} trên kho ứng dụng Apple Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageTime} source={IconTime} />
                                            <Text style={styles.textTime}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={Logo4U} style={styles.logo} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.request()}>
                                        <Text style={styles.textItem1}>Nhà hàng 4U - Yêu cầu Thay Gas</Text>
                                        <Text style={styles.textItem2}>Van gas đã chuyển, vui lòng thay gas</Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageTime} source={IconTime} />
                                            <Text style={styles.textTime}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoPhiLu} style={styles.logo} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.delivery()}>
                                        <Text style={styles.textItem1}>Giao hàng thành công</Text>
                                        <Text style={styles.textItem2}>Đơn hàng đã giao thành tông</Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageTime} source={IconTime} />
                                            <Text style={styles.textTime}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoVooc} style={styles.logo} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.order()}>
                                        <Text style={styles.textItem1}>Xác nhận đặt hàng</Text>
                                        <Text style={styles.textItem2}>Bạn có một đơn hàng cần xác nhận</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoVooc} style={styles.logo} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => Actions.order()}>
                                        <Text style={styles.textItem1}>Xác nhận đặt hàng</Text>
                                        <Text style={styles.textItem2}>Bạn có một đơn hàng cần xác nhận</Text>

                                        <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                                            <Image style={{ width: 15, height: 15 }} source={IconTime} />
                                            <Text style={{ textAlign: 'center', color: 'rgb(74,74,74)', fontSize: 12, letterSpacing: 0.45 }}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <Image source={LogoTGGas} style={styles.logo} />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.textItem1}>Thế Giới Gas cập nhật ứng dụng mới</Text>
                                        <Text style={styles.textItem2}>Phiên bản Thế Giới Gas 2.0 vừa được phát hành {'\n'} trên kho ứng dụng Apple Store</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageTime} source={IconTime} />
                                            <Text style={styles.textTime}>20/07/2009</Text>
                                        </View>
                                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)' }}>
                                            ______________________________________________________________</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}
export default Notification;