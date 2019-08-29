import React from 'react';
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
import IconGas45 from '../../images/Gas45.png';
import IconGas48 from '../../images/Gas48.png';
import IconA from '../../images/IconA.png';
import IconB from '../../images/IconB.png';
import IconCong from '../../images/IconCong.png';
import IconTru from '../../images/IconTru.png';
import IconInFo from '../../images/IconInfo.png';
import styles from '../../assets/styles/purchase2.style';

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
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.purchaseinfo()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Đặt hàng mua sỉ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()} >
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View >
                        <View >
                            <Text style={styles.textContainer}>Chi tiết đơn hàng</Text>
                            <Text style={styles.textContent1}>Loại Gas cần mua</Text>
                        </View>

                        <View style={styles.viewHorizontal}>
                            <TouchableOpacity>
                                <Image style={styles.content} source={IconGas45} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.content} source={IconGas45} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.content} source={IconGas48} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.content} source={IconGas48} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.iconA} source={IconA}></Image>
                                    <Text style={styles.textNumber}>Số lượng mua</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={this.incrementCountMinusPurchase}>
                                        <Image style={styles.iconPlus} source={IconTru} />
                                    </TouchableOpacity>
                                    <Text style={styles.textStatus}>{this.state.count}</Text>
                                    <TouchableOpacity onPress={this.incrementCountPlusPurchase}>
                                        <Image style={styles.iconPlus} source={IconCong} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.iconA} source={IconB}></Image>
                                    <Text style={styles.textNumber}>Số lượng vỏ đổi</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={this.incrementCountMinus}>
                                        <Image style={styles.iconPlus} source={IconTru} />
                                    </TouchableOpacity>
                                    <Text style={styles.textStatus}>{this.state.cin}</Text>
                                    <TouchableOpacity onPress={this.incrementCountPlus}>
                                        <Image style={styles.iconPlus} source={IconCong} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.viewNote}>
                            <Image style={{ width: 25, height: 25 }} source={IconInFo} />
                            <Text style={styles.textNote}>Bạn đã có vỏ bình gas “PM - Gas Hồng 45kg” để đổi chưa?{'\n'}Vui lòng điền số lượng vỏ đổi bạn có.</Text>
                        </View>

                        <View style={styles.textBottom}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textTotal}>Tổng tiền: </Text>
                                <Text style={styles.textTotal2}>{this.state.count * (150000)} VNĐ </Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.textDetail}>Chi tiết</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btnBottom} >
                            <TouchableOpacity style={styles.btnLogin} onPress={() => Actions.purchaseinfo3()}>
                                <Text style={styles.textBtnLogin} >Tiếp tục</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }

}
export default PurchaseInfoScreen2;