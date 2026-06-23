import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MediaItem } from '@rntp/player'

type SongInfoProps = {
  track: MediaItem | null
}

const SongInfo = ({ track }: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{track?.title ?? 'No track selected'}</Text>
      <Text style={styles.artist}>{track?.artist ?? ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  artist: {
    color: '#AAAAAA',
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
  },
})

export default SongInfo
