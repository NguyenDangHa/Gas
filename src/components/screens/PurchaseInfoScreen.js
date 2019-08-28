import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
    FlatList
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import { Actions } from 'react-native-router-flux';
import IconCalendar from '../../images/calendarIcon.png';
import IconPicker from '../../images/pickerIcon.png';
import IconClose from '../../images/closeIcon.png';
import styles from '../../assets/styles/purchase.style';

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
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.home()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Đặt hàng mua sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image style={styles.notification} source={IconNotifications} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'rgb(255,255,255)' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.textContainer}>Thông tin đặt hàng</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Text style={styles.textContent2}>Đơn vị :</Text>
                            <Text style={styles.textContent1}>            Nhà hàng 4U</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textContent2}>Điện thoại :</Text>
                            <Text style={styles.textContent3}>0905888999</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textContent2}>Địa chỉ :</Text>
                            <Text style={styles.textContent3}>     123 Võ Nguyên Giáp, Q. Sơn Trà,{'\n'} Tp.Đà Nẵng. </Text>
                        </View>

                        <Text numberOfLines={1} style={styles.textGach}>
                            ______________________________________________________________
                    </Text>
                    </View>

                    <View >
                        <Text style={styles.textContainer}>Địa chỉ nhận hàng</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textContent2}>Cơ sở :</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisible: true }); }}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <Text style={styles.textInput}>Cơ sở 1 - Võ Nguyên Giáp</Text>
                                    <Image
                                        source={IconPicker}
                                        style={styles.iconPicker} >
                                    </Image>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textContent2}>Điện thoại :</Text>
                            <Text style={styles.textContent3}>0905123321</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textContent2}>Địa chỉ :</Text>
                            <Text style={styles.textContent3}>     123 Võ Nguyên Giáp, Q. Sơn Trà,{'\n'} Tp.Đà Nẵng.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={styles.textContent2}>Ngày giao :</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisibleTow: true }); }}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <Text style={styles.textInput}>10 tháng 7 2019</Text>
                                    <Image source={IconCalendar}
                                        style={styles.iconCalendar} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btnBottom} >
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
                        <View style={styles.modal1}>
                            <Text style={styles.textContent1} >Chọn cơ sở</Text>
                            <TouchableOpacity onPress={async () => { await this.setState({ isVisible: false }); }}>
                                <Image style={{ marginRight: 24, width: 15, height: 20 }} source={IconClose}  ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{ margin: 20 }}>
                            <ScrollView>
                                <View>
                                    <Text style={styles.textModal1}>Nhà hàng 4U Cơ sở 1</Text>
                                    <Text style={styles.textModal2}>123 Võ Nguyên Giáp, Q. Sơn Trà, Tp. Đà Nẵng</Text>
                                    <Text numberOfLines={1} style={styles.textGach}>
                                        ______________________________________________________________</Text>
                                </View>
                                <View>
                                    <Text style={styles.textModal1}>Nhà hàng 4U Cơ sở 2</Text>
                                    <Text style={styles.textModal2}>20 Nguyễn Chí Thanh, Q. Hải Châu, Tp. Đà Nẵng</Text>
                                    <Text numberOfLines={1} style={styles.textGach}>
                                        ______________________________________________________________</Text>
                                </View>
                                <View>
                                    <Text style={styles.textModal1}>Nhà hàng 4U Cơ sở 1</Text>
                                    <Text style={styles.textModal2}>59 Nguyễn Tất Thành, Q. Hải Châu. Tp. Đà Nẵng</Text>
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
                                <Image style={styles.iconClose} source={IconClose} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.listView}>
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

                        <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:20 }} >
                            <TouchableOpacity style={styles.btnSelectDate} onPress={async () => { await this.setState({ isVisible: false }) }}>
                                <Text style={styles.textBtnSelectDate} >Đặt ngày giao</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
export default PurchaseInfoScreen;