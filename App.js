import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginScreen from './src/components/screens/LoginScreen';
import RegisterScreen from './src/components/screens/RegisterScreen';
import RegisterScreen2 from './src/components/screens/RegisterScreen2';
import RegisterScreen3 from './src/components/screens/RegisterScreen3';
import HomeScreen from './src/components/screens/HomeScreen';
import PurchaseInfoScreen from './src/components/screens/PurchaseInfoScreen';
import PurchaseInfoScreen2 from './src/components/screens/PurchaseInfoScreen2';
import PurchaseInfoScreen3 from './src/components/screens/PurchaseInfoScreen3';
import VerifyScreen from './src/components/screens/VerifyScreen';
import OnlinePaymentScreen from './src/components/screens/OnlinePaymentScreen';
import ReceiveScreen from './src/components/screens/ReceiveScreen';
import HistoryPurchase from './src/components/screens/HistoryPurchaseScreen';
import Notification from './src/components/screens/NotificationScreen';
import CheckScreen from './src/components/screens/CheckScreen';
import BarCodeCheckScreen from './src/components/screens/BarCodeCheckScreen';
import AccountScreen from './src/components/screens/AccountScreen';
import InfoAccountScreen from './src/components/screens/InfoAccountScreen';
import InfoStoreScreen from './src/components/screens/InfoStoreScreen';
import EditPassWord from './src/components/screens/EditPassScreen';
import TermOfUseScreen from './src/components/screens/TermsOfUseScreen';
import ContactScreen from './src/components/screens/ContactScreen';
import MessageScreen from './src/components/screens/MessageScreen';
import FinishedScreen from './src/components/screens/FinishedScreen';
import GasRequest from './src/components/screens/GasRequestScreen';
import OrderSuccessScreen from './src/components/screens/OrderSuccessScreen';
import SuccessfulDeliveryScreen from './src/components/screens/SuccessfulDeliveryScreen';
import CreateScreen from './src/components/screens/CreateScreen';
import { Router, Scene } from 'react-native-router-flux';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login"
          component={LoginScreen}
          title="Login"
          initial
          hideNavBar />
        <Scene
          key="register"
          component={RegisterScreen}
          title="Register"
          hideNavBar />
        <Scene
          key="registerTow"
          component={RegisterScreen2}
          title="Register"
          hideNavBar />
        <Scene
          key="registerThree"
          component={RegisterScreen3}
          title="Register"
          hideNavBar />
        <Scene
          key="home"
          component={HomeScreen}
          title="Home"
          hideNavBar />
        <Scene
          key="purchaseinfo"
          component={PurchaseInfoScreen}
          title="PurchaseInfoScreen"
          hideNavBar />
        <Scene
          key="purchaseinfo2"
          component={PurchaseInfoScreen2}
          title="PurchaseInfoScreen2"
          hideNavBar />
        <Scene
          key="purchaseinfo3"
          component={PurchaseInfoScreen3}
          title="PurchaseInfoScreen3"
          hideNavBar />
        <Scene
          key="verify"
          component={VerifyScreen}
          title="Verify"
          hideNavBar />
        <Scene
          key="onlinepayment"
          component={OnlinePaymentScreen}
          title="OnlinePayment"
          hideNavBar />
        <Scene
          key="receive"
          component={ReceiveScreen}
          title="Receive"
          hideNavBar />
        <Scene
          key="history"
          component={HistoryPurchase}
          title="HistoryPurchase"
          hideNavBar />
        <Scene
          key="notifications"
          component={Notification}
          title="Notification"
          hideNavBar />
        <Scene
          key="check"
          component={CheckScreen}
          title="Check"
          hideNavBar />
        <Scene
          key="checkbarcode"
          component={BarCodeCheckScreen}
          title="BarCodeCheck"
          hideNavBar
        />
        <Scene
          key="account"
          component={AccountScreen}
          title="Account"
          hideNavBar
        />
        <Scene
          key="infoAccount"
          component={InfoAccountScreen}
          title="Info Account"
          hideNavBar
        />
        <Scene
          key="infoStore"
          component={InfoStoreScreen}
          title="InfoStore"
          hideNavBar
        />
        <Scene
          key="editpass"
          component={EditPassWord}
          title="Edit PassWord"
          hideNavBar
        />
        <Scene
          key="termsOfUse"
          component={TermOfUseScreen}
          title="Terms Of Use"
          hideNavBar
        />
        <Scene
          key="contact"
          component={ContactScreen}
          title="Contact"
          hideNavBar
        />
        <Scene
          key="message"
          component={MessageScreen}
          title="Message"
          hideNavBar
        />
        <Scene
          key="finish"
          component={FinishedScreen}
          title="Finished"
          hideNavBar
        />
        <Scene
          key="request"
          component={GasRequest}
          title="Gas Request"
          hideNavBar
        />
        <Scene
          key="order"
          component={OrderSuccessScreen}
          title="Order Success"
          hideNavBar
        />
        <Scene
          key="delivery"
          component={SuccessfulDeliveryScreen}
          title="Successful Delivery"
          hideNavBar
        />
        <Scene
          key="createDH"
          component={CreateScreen}
          title="Create"
          hideNavBar
        />

      </Scene>
    </Router>
  );
}

export default App;