import { 
    StyleSheet,
    Text, 
    View, 
    FlatList, 
    Image, 
    Dimensions
} from 'react-native'

import React from 'react'

import { playListData } from '../constants'
import ControlCenter from '../component/controlcenter.tsx'
import SongSlider from '../component/slider.tsx'
import SongInfo from '../component/songinfo.tsx'

import { useActiveMediaItem } from '@rntp/player'

const { width } = Dimensions.get('window')

export default function Musicplayer() {
    const track = useActiveMediaItem() // MediaItem | null, auto-updates

    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artworkUrl && (
                        <Image 
                            style={styles.albumArtImg}
                            source={{
                                uri: track?.artworkUrl?.toString()
                            }} />
                    )}
                </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList 
            horizontal={true}
            data={playListData}
            renderItem={renderArtWork}
            keyExtractor={song=>song.mediaId='string'}
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
})