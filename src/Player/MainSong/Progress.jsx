import React from 'react'
import {
  PlayerProgressContainer,
  PlayerProgressPlayed,
  PlayerProgressLoaded,
} from '../styled'

export default ({ played, loaded, onSeekMouseDown, onSeekChange, onSeekMouseUp }) => {
  const xPos = (e) => {
    return ((e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth)
  }

  return (
    <PlayerProgressContainer
      onMouseDown={(e) => onSeekMouseDown(xPos(e))}
      onChange={(e) => onSeekChange(xPos(e))}
      onMouseUp={(e) => onSeekMouseUp(xPos(e))}
    >
      <PlayerProgressLoaded loaded={loaded}/>
      <PlayerProgressPlayed played={played}/>
    </PlayerProgressContainer>
  )
}