import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import {logo, imageLogo, eye} from '../../Assets';
const UnclockWallet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#fff'}
        hidden={false}
      />
      <View styles={styles.Logo}>
        <Image style={styles.imageLogo} source={imageLogo} />
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.txtContent}>Ronin Wallet</Text>
        <Text style={styles.txtNotification}>Your Digital Password</Text>
      </View>
      <View>
        <Text style={styles.txtInput}>ENTER PASSWORD</Text>
        <View>
          <TextInput
            placeholder=".........."
            placeholderTextColor="#000"
            secureTextEntry={true}
            style={styles.input}
          />
          <Image style={styles.iconInput} source={eye} />
        </View>
      </View>
      <View style={styles.Button}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Unclock</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UnclockWallet;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 380,
    height: 240,
    marginTop: '4%',
  },
  logo: {
    width: 180,
    height: 160,
    marginTop: '12%',
    marginLeft: 104,
    position: 'absolute',
  },
  txtContent: {
    textAlign: 'center',
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    lineHeight: 40,
  },
  txtNotification: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 8,
    fontWeight: '400',
  },
  txtInput: {
    color: '#57627B',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    marginLeft: 28,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#C5CEE0',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 12,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  iconInput: {
    width: 36,
    height: 36,
    position: 'absolute',
    marginLeft: 312,
    marginTop: 20,
  },
  btn: {
    width: 132,
    height: 56,
    backgroundColor: '#1273EA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtBtn: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
