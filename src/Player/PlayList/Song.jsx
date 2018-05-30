import React from 'react'
import { TrackTitle, TrackDate, ListSongContainer } from '../styled'
import PlayButton from '../MainSong/PlayButton'
import DeleteSongButton from '../MainSong/DeleteSongButton'

export default ({ active, trackTitle, date, songState, chooseSong, deleteSong }) => {

  return (
    <ListSongContainer>
      {active ?
        <PlayButton songState={songState} playPause={chooseSong}/> :
        <PlayButton playPause={chooseSong}/>}
      <TrackTitle>{trackTitle}</TrackTitle>
      <DeleteSongButton onDelete={deleteSong}/>
      <TrackDate>{date}</TrackDate>
    </ListSongContainer>
  )
}
