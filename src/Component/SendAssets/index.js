import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {
  iconBack2,
  iconMoney,
  Stack,
  iconRemove,
  iconUSD,
  iconEUR,
  iconYen,
  iconCursor,
} from '../../Assets';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
const ArrayData = [
  {
    id: 1,
    name: ' 1,000 USD',
    title: '23,046,000 VND',
    image: iconUSD,
  },
  {
    id: 2,
    name: ' 50 EUR ',
    title: '1,531,972 VND',
    image: iconEUR,
    cursor: iconCursor,
  },
  {
    id: 3,
    name: ' 10,000 USD',
    title: '2,103,317 VND',
    image: iconYen,
  },
];

const SendAssets = () => {
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [isModalNotification, setModalNotification] = useState(false);

  const onPressModal = () => {
    setVisibleModal(!isVisibleModal);
  };
  const alertNotification = () =>{
    setModalNotification(!isModalNotification);
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.flatList}>
        <Image style={styles.imageFlatList} source={item.image} />
        <View style={styles.textFlatList}>
          <Text style={styles.txtFlatListName}>{item.name}</Text>
          <Text style={styles.txtFlatListTitle}>{item.title}</Text>
        </View>
        <Image style={styles.iconCursor} source={item.cursor} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.iconBack} source={iconBack2} />
        <Text style={styles.txtContent}>Send Assets</Text>
      </View>

      <View style={styles.From}>
        <Text style={styles.txtForm}>From</Text>
        <TextInput
          placeholder="mY WALLET ...."
          placeholderTextColor="#000"
          secureTextEntry={true}
          style={styles.fromInput}
        />
        <Text style={styles.txtTo}>To</Text>
        <TextInput
          placeholder=".........."
          placeholderTextColor="#000"
          secureTextEntry={true}
          style={styles.fromInput}
        />
      </View>
      <Text style={styles.txtAsset}>Assets</Text>
      <TouchableOpacity onPress={onPressModal} style={styles.btn}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image style={styles.iconMoney} source={iconMoney} />
          <Text
            style={{
              marginLeft: 12,
              fontWeight: 'bold',
            }}>
            EUR
          </Text>
        </View>
        <Image style={styles.Stack} source={Stack} />
        <Modal
          isVisible={isVisibleModal}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={1000}
          animationOutTiming={1000}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={onPressModal} style={styles.btnModal}>
              <Text style={styles.txtHeaderModal}>Assets</Text>
              <Image style={styles.iconRemove} source={iconRemove} />
            </TouchableOpacity>
            <Text style={styles.borderModal}></Text>
            <FlatList
              data={ArrayData}
              keyExtractor={(item, index) => `${item.id} ${index}`}
              renderItem={renderItem}
              contentContainerStyle={styles.FlatList}
            />
            <View style = {styles.BTNNotification}>
              <TouchableOpacity  onPress = {alertNotification}style={styles.ButtonNotification}>
                <Modal 
                    isVisible={isModalNotification}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    animationInTiming={1000}
                    animationOutTiming={1000}>
                  <View style = {styles.modalNotification}>

                  </View>
                </Modal>
                
              </TouchableOpacity>
              <TouchableOpacity onPress = {alertNotification}
                style={styles.btnNotification}>
                <Text style={styles.txtNotification}>M</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
      <View style={styles.Amount}>
        <Text style={styles.txtAmont}>Amount</Text>
        <Text style={styles.txtAvaliable}>Available: 50 EUR</Text>
      </View>
      <View style={styles.txtInputAmount}>
        <TextInput
          placeholder=".........."
          placeholderTextColor="#000"
          style={styles.fromInputAmount}
        />
        <TouchableOpacity style={styles.btnMax}>
          <Text style={styles.Max}> Max </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnBottom}>
        <TouchableOpacity style={styles.btnCancel}>
          <Text style={styles.txtCancel}>Cancel</Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0, y: 1}}
          location={[1, 1]}
          colors={['#1C94F4', '#1273EA']}
          style={styles.btnSend}>
          <TouchableOpacity>
            <Text style={styles.txtSend}>Send</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default SendAssets;

const INPUT = {
  borderWidth: 1,
  borderColor: '#C5CEE0',
  borderRadius: 8,
  marginLeft: 20,
  marginRight: 20,
  marginTop: 12,
};
const TXTINPUT = {
  fontWeight: '700',
  fontSize: 16,
  color: '##57627B',
  marginLeft: 20,
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  txtContent: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginLeft: 60,
  },
  iconBack: {
    width: 60,
    height: 60,
    marginLeft: 20,
  },
  content: {
    flexDirection: 'row',
  },
  txtForm: {
    ...TXTINPUT,
    marginTop: 40,
  },
  fromInput: {
    ...INPUT,
  },
  txtTo: {
    ...TXTINPUT,
    marginTop: 12,
  },
  txtAsset: {
    ...TXTINPUT,
    marginTop: 8,
  },
  txtEUR: {
    paddingLeft: 100,
    ...INPUT,
  },
  iconMoney: {
    width: 40,
    height: 40,
    marginLeft: 12,
  },
  btn: {
    width: '90%',
    borderWidth: 1,
    marginTop: 12,
    // marginLeft:20,
    borderRadius: 8,
    borderColor: '#C5CEE0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 6,
  },
  textEur: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  Stack: {
    width: 28,
    aspectRatio: 1,
    marginRight: 12,
  },
  Amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  txtAmont: {
    ...TXTINPUT,
  },
  txtAvaliable: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
    marginRight: 36,
  },
  fromInputAmount: {
    ...INPUT,
    paddingVertical: 12,
  },
  btnMax: {
    width: 60,
    height: 32,
    position: 'absolute',
    marginLeft: '76%',
    backgroundColor: '#EEF3FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginRight: 52,
    borderRadius: 8,
  },
  Max: {
    color: '#57627B',
    fontSize: 16,
    paddingVertical: 6,
    textAlign: 'center',
  },
  containerForm: {
    justifyContent: 'space-between',
  },
  btnBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '36%',
  },
  txtCancel: {
    color: '#1273EA',
    fontWeight: '700',
    fontSize: 16,
  },
  txtSend: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  btnSend: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 8,
  },
  btnCancel: {
    marginLeft: 20,
    backgroundColor: '#F7F9FC',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 8,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flex: 1,
  },
  btnModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtHeaderModal: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: '40%',
    marginTop: '4%',
  },
  iconRemove: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginRight: 20,
  },
  borderModal: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#C5CEE0',
    marginLeft: 20,
    marginRight: 20,
  },
  flatList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  FlatList: {},
  textFlatList: {
    marginLeft: 20,
  },
  txtFlatListName: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  txtFlatListTitle: {
    fontSize: 16,
    color: '#8F9BB3',
    marginLeft: 6,
  },
  imageFlatList: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  iconCursor: {
    width: 20,
    height: 20,
    marginTop: 32,
    marginLeft: 20,
  },
  btnNotification: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40 / 2,
    position: 'absolute',
  },
  txtNotification: {
    color: '#fff',
    fontSize: 32,
  },
  ButtonNotification:{
    width: 60,
    height: 60,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60 / 2,
  },
  BTNNotification:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'70%',
    marginLeft:'40%'
  },
  modalNotification:{
    backgroundColor: '#fff',
    height:'30%',
    margin: 0, 
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    borderBottomRightRadius:60,
    marginLeft:20,
    marginRight: 20,
    marginTop:'80%'
  }
});
