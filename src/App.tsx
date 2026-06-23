import {
  StyleSheet,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native'

import React, { useEffect, useState } from 'react'
import { addTrack, playerSetup } from '../playerservice'
import { SafeAreaView } from 'react-native-safe-area-context'
import Musicplayer from './screens/musicplayer'

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  useEffect(() => {
    async function setup() {
      const isSetup = await playerSetup()

      if (isSetup) {
        await addTrack()
      }

      setIsPlayerReady(isSetup)
    }

    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator color="#FFFFFF" />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Musicplayer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
})
