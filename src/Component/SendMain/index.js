import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';

import {
  person,
  Ellipse,
  imageMain,
  imageBackground,
  Vi,
  Send,
  Swap,
  iconEUR,
  iconYen,
} from '../../Assets';

const Data = [
  {
    id: 1,
    name: ' 50 EUR ',
    title: '1,531,972 VND',
    image: iconEUR,
  },
  {
    id: 2,
    name: ' 10,000 USD',
    title: '2,103,317 VND',
    image: iconYen,
  },
];
const SendMain = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress = {() => navigation.navigate('SendAssets')} style={styles.flatList}>
        <Image style={styles.imageFlatList} source={item.image} />
        <View style={styles.textFlatList}>
          <Text style={styles.txtFlatListName}>{item.name}</Text>
          <Text style={styles.txtFlatListTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.imageBackground}
        source={imageBackground}
      />
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#fff'}
        hidden={false}
      />
      <View style={styles.absolute}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnRonin}>
            <Image style={styles.Ellipse} source={Ellipse} />
            <Text style={styles.txtContent}>Ronin Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UnclockWallet')}>
            <Image style={styles.person} source={person} />
          </TouchableOpacity>
        </View>
        <Image style={styles.imageMain} source={imageMain} />

        <View style={styles.icon}>
          <TouchableOpacity style={styles.btnDeposit}>
            <Image style={styles.Vi} source={Vi} />
            <Text style={styles.txtDeposit}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('SendAssets')} style={styles.btnSend}>
            <Image style={styles.Send} source={Send} />
            <Text style={styles.txtSend}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSwap}>
            <Image style={styles.Swap} source={Swap} />
            <Text style={styles.txtSwap}>Swap</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.txtAsset}>Assets</Text>
        <FlatList
          data={Data}
          keyExtractor={(item, index) => `${item.id} ${index}`}
          renderItem={renderItem}
          contentContainerStyle={styles.FlatList}
        />
      </View>
    </SafeAreaView>
  );
};

export default SendMain;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff'
  },
  absolute: {
    position: 'absolute',
  },
  btnRonin: {
    width: 120,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F7F9FC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 32,
    marginRight: 32,
  },
  txtContent: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  Ellipse: {
    width: 16,
    height: 16,
  },
  person: {
    width: 30,
    height: 30,
  },
  imageMain: {
    marginTop: '8%',
    justifyContent: 'center',
    marginLeft: 16,
    width: 360,
    height: 200,
  },
  imageBackground: {
    width: 360,
    height: 400,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSend: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSwap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDeposit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Vi: {
    width: 60,
    height: 60,
  },
  Send: {
    width: 60,
    height: 60,
  },
  Swap: {
    width: 60,
    height: 60,
  },
  txtAsset: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  flatList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#EDF1F7',
    borderRadius:16,
    marginLeft: 20,
    marginRight: 20,
    width:'90%',
    paddingVertical:8
  },
  FlatList: {
    backgroundColor: '#F7F9FC',
  },
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
});
