import TrackPlayer, { BackgroundEvent, PlayerCommand } from '@rntp/player'
import { playListData } from './src/constants'

let isPlayerInitialized = false

export async function playerSetup(): Promise<boolean> {
  try {
    if (isPlayerInitialized) {
      return true
    }

    TrackPlayer.setupPlayer()
    TrackPlayer.setCommands({
      capabilities: [
        PlayerCommand.PlayPause,
        PlayerCommand.Next,
        PlayerCommand.Previous,
        PlayerCommand.Seek,
      ],
    })

    isPlayerInitialized = true
    return true
  } catch (error) {
    console.error('Failed to set up player:', error)
    return false
  }
}

export async function addTrack(): Promise<void> {
  TrackPlayer.setMediaItems(playListData)
}

export async function serviceplayer(_event: BackgroundEvent): Promise<void> {
  // Remote controls use native handling by default.
}

export default serviceplayer
