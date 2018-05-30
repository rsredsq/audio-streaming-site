import React from 'react'
import { TrackTitle, TrackDate, ListSongContainer } from '../styled'
import PlayButton from '../MainSong/PlayButton'

export default ({ active, trackTitle, date, songState, chooseSong }) => {

  return (
    <ListSongContainer>
      {active ?
        <PlayButton songState={songState} playPause={chooseSong}/> :
        <PlayButton playPause={chooseSong}/>}
      <TrackTitle>{trackTitle}</TrackTitle>
      <TrackDate>{date}</TrackDate>
    </ListSongContainer>
  )
}
