import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import IconNotifications from '../../images/notificationIcon.png';
import IconBack from '../../images/backbutton.png';
import ImageKetQua from '../../images/ImageKqua.png';
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/barCodeScreen.style';

class BarCodeCheckScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.check()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Kiểm tra xuất xứ</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Image style={styles.imageTop} source={ImageKetQua} />
                    <View style={styles.container}>
                        <Text style={styles.textMaBinh}>Mã bình</Text>
                        <Text style={styles.textMaCode}>P12345606</Text>
                        <Text style={styles.textUnTop}>Hàng chính hãng</Text>
                        <Text numberOfLines={1} style={styles.textGach}>
                            ______________________________________________________________</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.textInfo}>Thông tin sản xuất</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Ngày sản{'\n'} xuất :</Text>
                            <Text style={styles.textItem2}>20/05/2019</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Nơi sản xuất :</Text>
                            <Text style={styles.textItem2}>Trạm PM Gas Điện Ngọc</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.textGach}>
                            ______________________________________________________________</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.textInfo}>Thông tin phân phối</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Ngày về đại {'\n'} lý :</Text>
                            <Text style={styles.textItem2}>26/05/2019</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Nhà phân phối :</Text>
                            <Text style={styles.textItem2}>Thế Giới Gas - Kho Hải Châu{'\n'} - Đà Nẵng</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.textGach}>
                            ______________________________________________________________</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.textInfo}>Thông tin giao hàng</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Ngày giao :</Text>
                            <Text style={styles.textItem2}>30/06/2019</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Người giao :</Text>
                            <Text style={styles.textItem2}>Nguyễn Văn Bình - 123400</Text>
                        </View>
                        <Text numberOfLines={1} style={styles.textGach}>
                            ______________________________________________________________</Text>
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={styles.textInfo}>Thông tin người dùng</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Ngày sản xuất :</Text>
                            <Text style={styles.textItem2}>30/06/2019</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Ngày dùng :</Text>
                            <Text style={styles.textItem2}>Nguyễn Thị Hương</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textItem1}>Địa chỉ :</Text>
                            <Text style={styles.textItem2}>123 Lê Duẩn, Hải Châu, Đà Nẵng</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );

    }
}

export default BarCodeCheckScreen;