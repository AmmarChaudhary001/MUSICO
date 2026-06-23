import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { useProgress } from '@rntp/player'

export default function SongSlider() {
    const {position, duration}=useProgress()
    const remaining=new Date((duration-position)*1000).toISOString().substring(15,19)

  return (
    <View>
      <Slider
      value={position}
      maximumValue={duration}
      minimumValue={0}
      thumbSize={12}
      thumbTintColor='#FFF'
      maximumTrackTintColor='#FFF'
      style={styles.sliderContainer}
       />
       <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {new Date(position*1000).toISOString().substring(15,19)}
            </Text>
            <Text style={styles.time}>
              {remaining}
            </Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
     sliderContainer: {
      width: 350,
      height: 50,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    timeContainer: {
      width: 340,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    time: {
      color: '#fff',
    },
  });
