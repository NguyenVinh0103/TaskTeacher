import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnclockWallet  from './src/Component/UnclockWallet'
import SendAssets  from './src/Component/SendAssets'
import Send  from './src/Component/Send/'

const App = () => {
  return (
    <View>
      <Send/>
      <UnclockWallet/>
      <SendAssets/>    
    </View>
  )
}

export default App

const styles = StyleSheet.create({})