import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, Modal, ScrollView, FlatList } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconGas45 from '../../images/Gas45.png';
import IconGas48 from '../../images/Gas48.png';
import IconA from '../../images/IconA.png';
import IconB from '../../images/IconB.png';
import IconCong from '../../images/IconCong.png';
import IconTru from '../../images/IconTru.png';
import IconInFo from '../../images/IconInfo.png';


class PurchaseInfoScreen2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false, //state of modal default false
            name: '123 Võ Nguyên Giáp, Q. Sơn Trà, Tp. Đà Nẵng',
            isVisibleTow: false,
            count: 0,
            cin: 0,
        };
    }
    incrementCountPlusPurchase = () => {
        this.setState({
            count: this.state.count + 1,

        })
    }
    incrementCountMinusPurchase = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    incrementCountPlus = () => {
        this.setState({
            cin: this.state.cin + 1
        })
    }
    incrementCountMinus = () => {
        this.setState({
            cin: this.state.cin - 1
        })
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => Actions.purchaseinfo()} ><Image source={IconBack} style={{ width: 45, height: 45, }}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>Đặt hàng mua sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={{ width: 30, height: 30, marginTop: 5, marginRight: 10 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'rgb(255,255,255)' }}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)', marginTop: 30 }}>Chi tiết đơn hàng</Text>
                        <Text style={{ fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)', marginTop: 20, marginBottom: 15 }}>Loại Gas cần mua</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
                        <TouchableOpacity><Image style={{ width: 88, height: 110 }} source={IconGas45}></Image></TouchableOpacity>
                        <TouchableOpacity><Image style={{ width: 88, height: 110 }} source={IconGas45}></Image></TouchableOpacity>
                        <TouchableOpacity><Image style={{ width: 88, height: 110 }} source={IconGas48}></Image></TouchableOpacity>
                        <TouchableOpacity><Image style={{ width: 88, height: 110 }} source={IconGas48}></Image></TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 19, height: 19, marginTop: 3, marginRight: 10, marginLeft: 10 }} source={IconA}></Image>
                                <Text style={{ fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)' }}>Số lượng mua</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={this.incrementCountMinusPurchase}>
                                    <Image style={{ marginTop: 20, width: 37, height: 38 }} source={IconTru} />
                                </TouchableOpacity>
                                <Text style={{ marginLeft: 5, marginRight: 5, marginTop: 15, paddingTop: 10, textAlign: 'center', borderRadius: 23, width: 100, height: 46, backgroundColor: 'rgb(241,241,241)' }}>{this.state.count}</Text>
                                <TouchableOpacity onPress={this.incrementCountPlusPurchase}>
                                    <Image style={{ marginTop: 20, width: 35, height: 36 }} source={IconCong} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 19, height: 19, marginTop: 3, marginRight: 10, marginLeft: 10 }} source={IconB}></Image>
                                <Text style={{ fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)' }}>Số lượng vỏ đổi</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={this.incrementCountMinus}>
                                    <Image style={{ marginTop: 20, width: 37, height: 38 }} source={IconTru} />
                                </TouchableOpacity>
                                <Text style={{ marginLeft: 5, marginRight: 5, marginTop: 15, paddingTop: 10, textAlign: 'center', borderRadius: 23, width: 100, height: 46, backgroundColor: 'rgb(241,241,241)' }}>{this.state.cin}</Text>
                                <TouchableOpacity onPress={this.incrementCountPlus}>
                                    <Image style={{ marginTop: 20, width: 35, height: 36 }} source={IconCong} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginLeft: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: 381, height: 67, borderRadius: 13, backgroundColor: 'rgba(247,181,0,0.2)', borderWidth: 1, borderColor: 'rgb(247,181,0)' }}>
                        <Image style={{ width: 25, height: 25 }} source={IconInFo} />
                        <Text style={{ fontSize: 12, lineHeight: 25, letterSpacing: 0.19, color: 'rgb(150,110,0)' }}>Bạn đã có vỏ bình gas “PM - Gas Hồng 45kg” để đổi chưa?{'\n'}Vui lòng điền số lượng vỏ đổi bạn có.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, }}>
                        <Text style={{ marginLeft: 20, fontSize: 15, lineHeight: 24, letterSpacing: 0.24, color: 'rgb(79,79,79)' }}>Tổng tiền: {this.state.count * (150000)} VNĐ </Text>
                        <TouchableOpacity><Text style={{ marginRight: 15, fontSize: 15, lineHeight: 24, letterSpacing: 0.24, color: 'rgb(186,12,47)' }}>Chi tiết</Text></TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 300 }} >
                        <TouchableOpacity style={styles.btnLogin} onPress={() => Actions.purchaseinfo3()}>
                            <Text style={styles.textBtnLogin} >Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    btnLogin: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnLogin: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },

})
export default PurchaseInfoScreen2;