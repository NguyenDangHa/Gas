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
import styles from '../../assets/styles/historyScreen.style';

class HistoryPurchase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check1: true,
            check2: false
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.home()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Quản lý đơn hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.navigation}>
                            <TouchableOpacity
                                onPress={() => this.setState({ checked1: !this.state.checked1, checked2: this.state.checked1 }, Actions.history())}>
                                <Image style={styles.imageTop}
                                    source={this.state.checked1 ? ChuaGiaoUnCheck : ChuaGiaoCheck} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.setState({ checked2: !this.state.checked2, checked1: this.state.checked2 }, Actions.finish())}>
                                <Image style={styles.imageTop} 
                                    source={this.state.checked2 ? DaGiaoCheck : DaGiaoUnCheck} />
                            </TouchableOpacity>
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
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    <View style={{alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
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
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>

                                    <View style={{alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
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
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    
                                    <View style={{alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
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
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={styles.textNhaHang}>Nhà hàng 4U - Cơ sở 1{'\n'}14 Nguyễn Tất Thành,Hải Châu{'\n'}Đà Nẵng</Text>
                                    </View>
                                    
                                    <View style={{alignItems: 'flex-end' }}>
                                        <TouchableOpacity style={styles.btnVerify}>
                                            <Text style={styles.textBtnVerify} onPress={() => Actions.receive()}>Nhận hàng</Text>
                                        </TouchableOpacity>
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
export default HistoryPurchase;