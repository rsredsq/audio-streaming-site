import React from 'react'
import { TrackTitle, TrackDate, ListSongContainer } from '../styled'
import PlayButton from '../MainSong/PlayButton'

export default ({ active, trackTitle, date, songState }) => (
  <ListSongContainer>
    {active ?
      <PlayButton songState={songState}/> :
      <PlayButton/>}
    <TrackTitle>{trackTitle}</TrackTitle>
    <TrackDate>{date}</TrackDate>
  </ListSongContainer>
)
