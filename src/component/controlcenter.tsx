import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { PlaybackState, useIsPlaying, usePlaybackState } from '@rntp/player'
// Use require to avoid TypeScript module-not-found for vector icons
// and treat the imported icon as any to bypass missing type declarations.
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any
const Icon: any = require('react-native-vector-icons/MaterialIcons')

const ControlCenter = () => {
    const isPlaying = useIsPlaying()
    const playerState = usePlaybackState() // PlaybackState enum: idle | ready | buffering | ended | error

    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    const togglePlayPause = async () => {
        const currentTrackIndex = await TrackPlayer.getActiveMediaItemIndex()

        if (currentTrackIndex !== null) {
            if (!isPlaying) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name='skip-next' size={40} />
      </Pressable>
      <Pressable onPress={togglePlayPause}>
        <Icon 
         style={styles.icon}
         name={isPlaying ? 'pause' : 'play-arrow'} 
         size={70} />
      </Pressable>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name='skip-previous' size={40} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter