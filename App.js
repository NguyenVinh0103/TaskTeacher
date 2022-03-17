import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UnclockWallet  from './src/Component/UnclockWallet'
import SendAssets  from './src/Component/SendAssets'

const App = () => {
  return (
    <View>
      <SendAssets/>
      <UnclockWallet/>      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})