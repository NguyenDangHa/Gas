import React, { Component } from 'react';
import {
    StyleSheet,
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
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={{ width: 42, height: 42, }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'rgb(255,255,255)', fontSize: 20, letterSpacing: 0.75, textAlign: 'center', marginTop: 5,fontWeight: 'bold' }}>Thông tin cửa hàng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={{ marginRight: 10, alignItems: 'center',width:30,height:30 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginLeft: 10, alignItems: 'center' }}>
                        <Text style={{ marginTop: 20, fontSize: 15, letterSpacing: 0.56, color: 'rgb(79,79,79)' }}>Số cửa hàng đang có</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Image style={{ width: 32, height: 32, borderRadius: 50 }} source={ImageCHTop} />
                            <Text style={{ fontSize: 20, letterSpacing: 0.75, color: 'rgb(79,79,79)' }}>3 cửa hàng</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',marginTop:20}}>
                        <View style={{marginBottom:10, borderRadius: 15, flexDirection: 'row', width: 384, height: 229, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                            <View style={{width:236,borderTopLeftRadius:15,borderBottomLeftRadius:15,backgroundColor:'rgb(255,255,255)'}}>
                                <View style={{flexDirection:'row',margin:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImageCHBottom}/>
                                    <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 0.56, color: 'rgb(79,79,79)' }}>Thông tin cửa hàng</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImageTenCH}/>
                                    <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 0.56, color: 'rgb(186,12,47)' }}>Nhà hàng 4U cơ sở 1</Text>
                                </View>
                                <Text style={{margin:20,fontSize: 12, letterSpacing: 0.45, color: 'rgb(79,79,79)' }}>123 Nguyễn Tất Thành,Hải Châu, P. Thuận Phước, Tp. Đà Nẵng</Text>
                                <View style={{flexDirection:'row',marginLeft:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImagePhone}/>
                                    <Text style={{fontSize: 12, letterSpacing: 0.45, color: 'rgb(79,79,79)' }}>ĐT: 09051234678</Text>
                                </View>
                            </View>
                            <View>
                                <Image style={{width:146,height:228,borderBottomRightRadius:15,borderTopRightRadius:15}} source={ImageMaps}/>
                            </View>
                        </View>

                        <View style={{marginBottom:10, borderRadius: 15, flexDirection: 'row', width: 384, height: 229, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                            <View style={{width:236,borderTopLeftRadius:15,borderBottomLeftRadius:15,backgroundColor:'rgb(255,255,255)'}}>
                                <View style={{flexDirection:'row',margin:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImageCHBottom}/>
                                    <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 0.56, color: 'rgb(79,79,79)' }}>Thông tin cửa hàng</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImageTenCH}/>
                                    <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 0.56, color: 'rgb(186,12,47)' }}>Nhà hàng 4U cơ sở 1</Text>
                                </View>
                                <Text style={{margin:20,fontSize: 12, letterSpacing: 0.45, color: 'rgb(79,79,79)' }}>123 Nguyễn Tất Thành,Hải Châu, P. Thuận Phước, Tp. Đà Nẵng</Text>
                                <View style={{flexDirection:'row',marginLeft:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImagePhone}/>
                                    <Text style={{fontSize: 12, letterSpacing: 0.45, color: 'rgb(79,79,79)' }}>ĐT: 09051234678</Text>
                                </View>
                            </View>
                            <View>
                                <Image style={{width:146,height:228,borderBottomRightRadius:15,borderTopRightRadius:15}} source={ImageMaps}/>
                            </View>
                        </View>

                        <View style={{marginBottom:10, borderRadius: 15, flexDirection: 'row', width: 384, height: 229, borderWidth: 1, borderColor: 'rgba(195,195,195,0.5)' }}>
                            <View style={{width:236,borderTopLeftRadius:15,borderBottomLeftRadius:15,backgroundColor:'rgb(255,255,255)'}}>
                                <View style={{flexDirection:'row',margin:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImageCHBottom}/>
                                    <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 0.56, color: 'rgb(79,79,79)' }}>Thông tin cửa hàng</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImageTenCH}/>
                                    <Text style={{fontWeight:'bold', fontSize: 15, letterSpacing: 0.56, color: 'rgb(186,12,47)' }}>Nhà hàng 4U cơ sở 1</Text>
                                </View>
                                <Text style={{margin:20,fontSize: 12, letterSpacing: 0.45, color: 'rgb(79,79,79)' }}>123 Nguyễn Tất Thành,Hải Châu, P. Thuận Phước, Tp. Đà Nẵng</Text>
                                <View style={{flexDirection:'row',marginLeft:20}}>
                                    <Image style={{width:20,height:20,marginRight:10}} source={ImagePhone}/>
                                    <Text style={{fontSize: 12, letterSpacing: 0.45, color: 'rgb(79,79,79)' }}>ĐT: 09051234678</Text>
                                </View>
                            </View>
                            <View>
                                <Image style={{width:146,height:228,borderBottomRightRadius:15,borderTopRightRadius:15}} source={ImageMaps}/>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 50,
        marginTop: 20,
        width: 328,
        height: 46,
        borderRadius: 25,
        fontSize: 14,
        letterSpacing: 0.58,
        backgroundColor: 'rgb(241,241,241)',
        color: 'rgba(102,102,102,0.5)',
        marginHorizontal: 25,
    },
});

export default InfoStoreScreen;