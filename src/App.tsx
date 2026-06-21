import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, 
  StatusBar  
} from 'react-native'

import React, { useEffect, useState } from 'react'
import {addTrack, playerSetup} from '../playerservice'
import { SafeAreaView } from 'react-native-safe-area-context'
import Musicplayer from './screens/musicplayer'



export default function App() {

  const [isPlayerReady, setIsPlayerReady]=useState(false)

  async function Setup() {
    let isSetup=await playerSetup()

    if(isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)

    if(!isPlayerReady){
      return (
        <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
      )
    }


    useEffect(() => {
      Setup()
    }, [])
    
  }
  
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle={'light-content'}
       />
       <Musicplayer />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})