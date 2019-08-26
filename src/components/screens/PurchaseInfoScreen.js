import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet, Image, Modal, ScrollView, FlatList } from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconCalendar from '../../images/calendarIcon.png';
import IconPicker from '../../images/pickerIcon.png';
import IconClose from '../../images/closeIcon.png';


class PurchaseInfoScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false, //state of modal default false
            name: '123 Võ Nguyên Giáp, Q. Sơn Trà, Tp. Đà Nẵng',
            isVisibleTow: false,
        };
    }

    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                    <TouchableOpacity onPress={() => Actions.home()} ><Image source={IconBack} style={{ width: 45, height: 45, }}></Image></TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', fontWeight: 'bold' }}>Đặt hàng mua sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image style={{ width: 30, height: 30, marginRight: 10 }} source={IconNotifications} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'rgb(255,255,255)' }}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)', marginTop: 30 }}>Thông tin đặt hàng</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Text style={{ marginTop: 2 }}>Đơn vị :</Text>
                            <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(74,74,74)' }}>Nhà hàng 4U</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 2 }}>Điện thoại :</Text>
                            <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>0905888999</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Text style={{ marginTop: 5 }}>Địa chỉ :</Text>
                            <Text style={{ marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>123 Võ Nguyên Giáp, Q. Sơn Trà, Tp.Đà Nẵng. </Text>
                        </View>

                        <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', justifyContent: 'center', alignContent: 'center', marginBottom: 30, marginTop: 10, textAlign: 'center' }}>
                            ______________________________________________________________
                    </Text>
                    </View>

                    <View style={{ marginLeft: 20, }}>
                        <Text style={{ marginBottom: 30, fontSize: 17, lineHeight: 22, letterSpacing: 0.5, color: 'rgb(186,12,47)' }}>Địa chỉ nhận hàng</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                            <Text style={{ marginTop: 10 }}>Cơ sở :</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisible: true }); }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ paddingTop: 10, marginBottom: 11, marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, backgroundColor: 'rgb(235,235,235)', width: 300, height: 44, borderRadius: 22, textAlign: 'center' }}>Cơ sở 1 - Võ Nguyên Giáp</Text>
                                    <Image
                                        source={IconPicker}
                                        style={{ width: 28, height: 24, top: 10, right: 30, }} >
                                    </Image>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 2 }}>Điện thoại :</Text>
                            <Text style={{ marginBottom: 11, marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>0905123321</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 5 }}>Địa chỉ :</Text>
                            <Text style={{ marginBottom: 11, marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, color: 'rgb(0,0,0)' }}>{this.state.name} </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10 }}>Ngày giao :</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisibleTow: true }); }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ textAlign: 'center', paddingTop: 10, marginBottom: 11, marginLeft: 25, fontSize: 15, lineHeight: 25, letterSpacing: 0.24, backgroundColor: 'rgb(235,235,235)', width: 290, height: 44, borderRadius: 22 }}>10 tháng 7 2019</Text>
                                    <Image source={IconCalendar}
                                        style={{ width: 30, height: 27, position: 'absolute', top: 8, right: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 150 }} >
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.textBtnLogin} onPress={() => Actions.purchaseinfo2()}>Tiếp tục</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isVisible}
                    onRequestClose={() => { this.setState({ isVisible: true }) }}>

                    <View style={styles.modal}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ marginLeft: 22, marginBottom: 50 }} >Chọn cơ sở</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisible: false }); }}>
                                <Image style={{ marginRight: 24, width: 15, height: 20 }} source={IconClose}  ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <ScrollView>
                                <View>
                                    <Text style={{ letterSpacing: 0.44, color: 'rgb(79,79,79)', fontSize: 15 }}>Nhà hàng 4U Cơ sở 1</Text>
                                    <Text style={{ letterSpacing: 0.44, color: 'rgb(167,167,167)', fontSize: 15 }}>123 Võ Nguyên Giáp, Q. Sơn Trà, Tp. Đà Nẵng</Text>
                                    <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', justifyContent: 'center', alignContent: 'center', marginBottom: 15, textAlign: 'center' }}>
                                        ______________________________________________________________</Text>
                                </View>
                                <View>
                                    <Text style={{ letterSpacing: 0.44, color: 'rgb(79,79,79)', fontSize: 15 }}>Nhà hàng 4U Cơ sở 2</Text>
                                    <Text style={{ letterSpacing: 0.44, color: 'rgb(167,167,167)', fontSize: 15 }}>20 Nguyễn Chí Thanh, Q. Hải Châu, Tp. Đà Nẵng</Text>
                                    <Text numberOfLines={1} style={{ color: 'rgb(151,151,151)', justifyContent: 'center', alignContent: 'center', marginBottom: 15, textAlign: 'center' }}>
                                        ______________________________________________________________</Text>
                                </View>
                                <View>
                                    <Text style={{ letterSpacing: 0.44, color: 'rgb(79,79,79)', fontSize: 15 }}>Nhà hàng 4U Cơ sở 1</Text>
                                    <Text style={{ letterSpacing: 0.44, color: 'rgb(167,167,167)', fontSize: 15 }}>59 Nguyễn Tất Thành, Q. Hải Châu. Tp. Đà Nẵng</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                </Modal>


                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isVisibleTow}
                    onRequestClose={() => { this.setState({ isVisibleTow: true }) }}>

                    <View style={styles.modal2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ marginLeft: 22, marginBottom: 50 }} >Chọn ngày giao</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisibleTow: false }); }}>
                                <Image style={{ marginRight: 24, width: 15, height: 20 }} source={IconClose}  ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 20, flexDirection: 'row', flex: 1 }}>

                            <View style={{ flex: 1, marginLeft: 50 }}>
                                <FlatList
                                    data={[
                                        { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' },
                                        { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' },
                                        { key: '13' }, { key: '14' }, { key: '15' }, { key: '16' }, { key: '17' }, { key: '18' },
                                        { key: '19' }, { key: '20' }, { key: '21' }, { key: '22' }, { key: '23' }, { key: '24' },
                                        { key: '25' }, { key: '26' }, { key: '27' }, { key: '28' }, { key: '29' }, { key: '30' },
                                        { key: '31' }
                                    ]}
                                    renderItem={({ item }) =>
                                        <Text style={styles.items}>{item.key}</Text>}
                                    numColumns={1}
                                    keyExtractor={(item, index) => index}
                                />
                            </View>

                            <View style={{ flex: 1, marginRight: 20 }}>
                                <FlatList
                                    data={[
                                        { key: 'Tháng 1' }, { key: 'Tháng 2' }, { key: 'Tháng 3' }, { key: 'Tháng 4' }, { key: 'Tháng 5' }, { key: 'Tháng 6' },
                                        { key: 'Tháng 7' }, { key: 'Tháng 8' }, { key: 'Tháng 9' }, { key: 'Tháng 10' }, { key: 'Tháng 11' }, { key: 'Tháng 12' },
                                    ]}
                                    renderItem={({ item }) =>
                                        <Text style={styles.items}>{item.key}</Text>}
                                    numColumns={1}
                                    keyExtractor={(item, index) => index}
                                />
                            </View>


                        </View>
                        <TouchableOpacity style={styles.btnSelectDate} onPress={async () => { await this.setState({ isVisible: false }) }}>
                            <View style={{ alignItems: 'center', marginTop: 20 }} >
                                <Text style={styles.textBtnSelectDate} >Đặt ngày giao</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Modal>
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
    modal: {
        marginTop: 150,
        height: 450,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,
        margin: 20,
    },
    modal2: {
        marginTop: 250,
        height: 418,
        backgroundColor: 'rgb(197,197,197)',
        borderRadius: 20,

    },
    items: {
        backgroundColor: 'rgb(186,12,47)',
        fontSize: 15,
        lineHeight: 22,
        letterSpacing: 0.44,
        margin: 10,
        width: 114,
        height: 40,
        borderRadius: 22,
        textAlign: 'center',
        paddingTop: 10
    },
    btnSelectDate: {
        width: 163,
        height: 46,
        borderRadius: 25,
        backgroundColor: 'rgb(186,12,47)',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnSelectDate: {
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
export default PurchaseInfoScreen;