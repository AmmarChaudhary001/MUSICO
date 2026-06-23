import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import TrackPlayer, { useIsPlaying } from '@rntp/player'
import { MaterialIcons } from '@react-native-vector-icons/material-icons/static'

const ControlCenter = () => {
    const isPlaying = useIsPlaying()

    const skipToNext = () => {
        TrackPlayer.skipToNext()
    }

    const togglePlayPause = () => {
        const currentTrackIndex = TrackPlayer.getActiveMediaItemIndex()

        if (currentTrackIndex !== null) {
            if (!isPlaying) {
                TrackPlayer.play()
            } else {
                TrackPlayer.pause()
            }
        }
    }

    const skipToPrevious = () => {
        TrackPlayer.skipToPrevious()
    }

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
         <MaterialIcons style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={togglePlayPause}>
         <MaterialIcons
         style={styles.icon}
         name={isPlaying ? 'pause' : 'play-arrow'}
         size={50} />
      </Pressable>
      <Pressable onPress={skipToNext}>
         <MaterialIcons style={styles.icon} name="skip-next" size={40} />
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
