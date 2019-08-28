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
import { Actions } from 'react-native-router-flux';
import styles from '../../assets/styles/useScreen.style';

class TermOfUseScreen extends Component {
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.topView}>
                    <TouchableOpacity onPress={() => Actions.account()} >
                        <Image source={IconBack} style={styles.imageBack} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Điều khoản sử dụng</Text>
                    <TouchableOpacity onPress={() => Actions.notifications()}>
                        <Image source={IconNotifications} style={styles.notification} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.textItem1}>
                            Chào mừng bạn đến với Thế Giới Gas{'\n'}</Text>

                        <Text style={styles.textItem2}>
                            Cảm ơn bạn đã sử dụng các sản phẩm và dịch vụ của chúng tôi (“Dịch vụ”). Dịch vụ được cung cấp bởi Google LLC (“Google”) có trụ sở tại 1600 Amphitheatre Parkway, Mountain View, CA 94043, Hoa Kỳ. {'\n'}{'\n'}

                            Bằng việc sử dụng Dịch vụ của chúng tôi, bạn đang đồng ý với các điều khoản này. Vui lòng đọc kỹ các điều khoản này.{'\n'}{'\n'}

                            Dịch vụ của chúng tôi rất đa dạng nên đôi khi có thể áp dụng các điều khoản bổ sung hoặc các yêu cầu về sản phẩm (bao gồm cả yêu cầu về độ tuổi). Các điều khoản bổ sung sẽ được cung cấp kèm theo Dịch vụ liên quan và các điều khoản bổ sung đó sẽ trở thành một phần thuộc thỏa thuận của bạn với chúng tôi nếu bạn sử dụng các Dịch vụ đó.{'\n'}{'\n'}
                        </Text>

                        <Text style={styles.textItem1}>
                            Sử dụng dịch vụ của chúng tôi {'\n'}</Text>

                            <Text style={styles.textItem2}>
                          Bạn phải tuân thủ mọi chính sách đã cung cấp cho bạn trong phạm vi Dịch vụ.{'\n'}{'\n'}
Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.
                            </Text>
                    </View>
                </ScrollView>
            </View>
        );

    }
}
export default TermOfUseScreen;