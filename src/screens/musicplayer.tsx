import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Dimensions,
} from 'react-native'

import React from 'react'

import { playListData } from '../constants'
import ControlCenter from '../component/controlcenter'
import SongSlider from '../component/slider'
import SongInfo from '../component/songinfo'

import { useActiveMediaItem, MediaItem } from '@rntp/player'

const { width } = Dimensions.get('window')

export default function Musicplayer() {
    const track = useActiveMediaItem() // MediaItem | null, auto-updates

    const renderArtWork = ({item}:{item:MediaItem}) => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {item?.artworkUrl && (
                        <Image 
                            style={styles.albumArtImg}
                            source={{
                                uri: item?.artworkUrl?.toString()
                            }} />
                    )}
                </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList<MediaItem>
            horizontal={true}
            data={playListData}
            renderItem={renderArtWork}
            keyExtractor={(_, index) => index.toString()}
        />

        <SongInfo track={track} />
        <SongSlider />
        <ControlCenter />
    </View>
  )
}

const styles = StyleSheet.create({
     container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      height:400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
      backgroundColor:'#000'
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
      
    },
})