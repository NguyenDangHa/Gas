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
import ImageCHTop from '../../images/ImgTTCHTop.png';
import ImageCHBottom from '../../images/ImgTTCHBottom.png';
import ImageTenCH from '../../images/ImgTenCH.png';
import ImagePhone from '../../images/ImgPhone.png';
import ImageMaps from '../../images/ImgMap.png';
import styles from '../../assets/styles/infoStoreScreen.style';
import { Actions } from 'react-native-router-flux';

class InfoStoreScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Thông tin cửa hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textNumberCH}>Số cửa hàng đang có</Text>
                        <View style={styles.textInfoCH}>
                            <Image style={styles.imageTop} source={ImageCHTop} />
                            <Text style={styles.textNumber}>3 cửa hàng</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        
                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeft}>
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImageCHBottom} />
                                    <Text style={styles.textItem1}>Thông tin cửa hàng</Text>
                                </View>
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImageTenCH} />
                                    <Text style={styles.textItem2}>Nhà hàng 4U cơ sở 1</Text>
                                </View>
                                
                                <Text style={styles.textItem3}>123 Nguyễn Tất Thành,Hải Châu, P. Thuận Phước, Tp. Đà Nẵng</Text>
                                
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImagePhone} />
                                    <Text style={styles.textItem4}>ĐT: 09051234678</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={styles.imageMaps} source={ImageMaps} />
                            </View>
                        </View>

                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeft}>
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImageCHBottom} />
                                    <Text style={styles.textItem1}>Thông tin cửa hàng</Text>
                                </View>
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImageTenCH} />
                                    <Text style={styles.textItem2}>Nhà hàng 4U cơ sở 2</Text>
                                </View>
                                
                                <Text style={styles.textItem3}>123 Nguyễn Tất Thành,Hải Châu, P. Thuận Phước, Tp. Đà Nẵng</Text>
                                
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImagePhone} />
                                    <Text style={styles.textItem4}>ĐT: 09051234678</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={styles.imageMaps} source={ImageMaps} />
                            </View>
                        </View>

                        <View style={styles.itemContainer}>
                            <View style={styles.itemLeft}>
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImageCHBottom} />
                                    <Text style={styles.textItem1}>Thông tin cửa hàng</Text>
                                </View>
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImageTenCH} />
                                    <Text style={styles.textItem2}>Nhà hàng 4U cơ sở 3</Text>
                                </View>
                                
                                <Text style={styles.textItem3}>123 Nguyễn Tất Thành,Hải Châu, P. Thuận Phước, Tp. Đà Nẵng</Text>
                                
                                <View style={styles.itemTopLeft}>
                                    <Image style={styles.iconLeft} source={ImagePhone} />
                                    <Text style={styles.textItem4}>ĐT: 09051234678</Text>
                                </View>
                            </View>
                            <View>
                                <Image style={styles.imageMaps} source={ImageMaps} />
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default InfoStoreScreen;