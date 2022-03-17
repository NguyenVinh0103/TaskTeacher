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
import LinearGradient from 'react-native-linear-gradient';

const Send = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>index</Text>
      </View>
      
    </SafeAreaView>
  );
};

export default Send;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
