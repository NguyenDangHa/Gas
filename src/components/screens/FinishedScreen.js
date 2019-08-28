import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconMaDH from '../../images/iconMaDonHang.png';
import IconDate from '../../images/iconNgayGiao.png';
import IconAddress from '../../images/iconNoiNhan.png';
import ChuaGiaoCheck from '../../images/chuaGiaoCheck.png';
import ChuaGiaoUnCheck from '../../images/chuaGiaoUnCheck.png';
import DaGiaoCheck from '../../images/daGiaoCheck.png';
import DaGiaoUnCheck from '../../images/daGiaoUnCheck.png';
import VND from '../../images/VND.png';
import Month from '../../images/thisMonth.png';
import Gach from '../../images/gachdung.png';
import styles from '../../assets/styles/finishScreen.style';

class FinishedScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check1: false,
            check2: true
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.history()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Quản lý đơn hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={styles.notification} ></Image>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.navigation}>
                            <TouchableOpacity onPress={() => this.setState({ checked1: this.state.checked1, checked2: this.state.checked1 }, Actions.history())}>
                                <Image style={styles.imageTop}
                                    source={this.state.checked1 ? ChuaGiaoCheck : ChuaGiaoUnCheck} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.setState({ checked2: this.state.checked2, checked1: this.state.checked2 }, Actions.finish())}>
                                <Image style={styles.imageTop}
                                    source={this.state.checked2 ? DaGiaoUnCheck : DaGiaoCheck} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                            <Image style={{ width: 25, height: 25, marginRight: 10 }} source={Month} />
                            <Text style={{ color: 'rgb(109,114,120)', fontSize: 15, letterSpacing: -0.24, fontWeight: 'bold', marginRight: 10 }}>Tháng này</Text>
                            <Image style={{ height: 20, marginRight: 15 }} source={Gach} />
                            <Text style={{ color: 'rgb(109,114,120)', fontSize: 15, letterSpacing: -0.24, marginRight: 15 }}>3 tháng gần nhất</Text>
                        </View>

                        <View style={styles.containerItems}>
                            <View style={styles.item1}>
                                <View>
                                    <View style={styles.itemLeft}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.itemLeftImage} source={IconMaDH} />
                                            <Text style={styles.itemLeftText}>Mã đơn hàng</Text>
                                        </View>
                                        <Text style={styles.itemText2}>01908300003</Text>
                                    </View>
                                    <View style={styles.itemLeft2}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageDate} source={IconDate} />
                                            <Text style={styles.itemLeftText}>Ngày giao</Text>
                                        </View>
                                        <Text style={styles.textDate}>22/07/2019</Text>
                                    </View>
                                </View>

                                <View style={styles.itemRight}>
                                <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.imageAddress} source={IconAddress} />
                                        <Text style={styles.textNoiNhan}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20}}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', }} >
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Image style={styles.imageVND} source={VND} />
                                            <Text style={styles.textTotal}>Tổng tiền</Text>
                                        </View>
                                        <Text style={styles.textPrice}>45,000,000 VNĐ  </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.item1}>
                                <View>
                                    <View style={styles.itemLeft}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.itemLeftImage} source={IconMaDH} />
                                            <Text style={styles.itemLeftText}>Mã đơn hàng</Text>
                                        </View>
                                        <Text style={styles.itemText2}>01908300003</Text>
                                    </View>
                                    <View style={styles.itemLeft2}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageDate} source={IconDate} />
                                            <Text style={styles.itemLeftText}>Ngày giao</Text>
                                        </View>
                                        <Text style={styles.textDate}>22/07/2019</Text>
                                    </View>
                                </View>

                                <View style={styles.itemRight}>
                                <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.imageAddress} source={IconAddress} />
                                        <Text style={styles.textNoiNhan}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20}}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', }} >
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Image style={styles.imageVND} source={VND} />
                                            <Text style={styles.textTotal}>Tổng tiền</Text>
                                        </View>
                                        <Text style={styles.textPrice}>45,000,000 VNĐ  </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.item1}>
                                <View>
                                    <View style={styles.itemLeft}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.itemLeftImage} source={IconMaDH} />
                                            <Text style={styles.itemLeftText}>Mã đơn hàng</Text>
                                        </View>
                                        <Text style={styles.itemText2}>01908300003</Text>
                                    </View>
                                    <View style={styles.itemLeft2}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageDate} source={IconDate} />
                                            <Text style={styles.itemLeftText}>Ngày giao</Text>
                                        </View>
                                        <Text style={styles.textDate}>22/07/2019</Text>
                                    </View>
                                </View>

                                <View style={styles.itemRight}>
                                <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.imageAddress} source={IconAddress} />
                                        <Text style={styles.textNoiNhan}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20}}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', }} >
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Image style={styles.imageVND} source={VND} />
                                            <Text style={styles.textTotal}>Tổng tiền</Text>
                                        </View>
                                        <Text style={styles.textPrice}>45,000,000 VNĐ  </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.item1}>
                                <View>
                                    <View style={styles.itemLeft}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.itemLeftImage} source={IconMaDH} />
                                            <Text style={styles.itemLeftText}>Mã đơn hàng</Text>
                                        </View>
                                        <Text style={styles.itemText2}>01908300003</Text>
                                    </View>
                                    <View style={styles.itemLeft2}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.imageDate} source={IconDate} />
                                            <Text style={styles.itemLeftText}>Ngày giao</Text>
                                        </View>
                                        <Text style={styles.textDate}>22/07/2019</Text>
                                    </View>
                                </View>

                                <View style={styles.itemRight}>
                                <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.imageAddress} source={IconAddress} />
                                        <Text style={styles.textNoiNhan}>Nơi nhận</Text>
                                    </View>
                                    <View style={{ marginLeft: 20}}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-start', }} >
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <Image style={styles.imageVND} source={VND} />
                                            <Text style={styles.textTotal}>Tổng tiền</Text>
                                        </View>
                                        <Text style={styles.textPrice}>45,000,000 VNĐ  </Text>
                                    </View>
                                </View>
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default FinishedScreen;