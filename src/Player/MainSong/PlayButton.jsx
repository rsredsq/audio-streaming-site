import React from 'react'
import { NextIconSVG, PlayIconSVG, PauseIconSVG, PreloaderIconSvg } from '../icons'
import { PlayerButton, playerIconStyle } from '../styled'

export default ({ playPause, songState }) => {
  console.log('PlayButton', songState)
  return (
    <PlayerButton type="button"
                  onClick={playPause}>
      {songState === 'pause' && <PlayIconSVG style={playerIconStyle}/>}
      {songState === 'playing' && <PauseIconSVG style={playerIconStyle}/>}
      {songState === 'loading' && <NextIconSVG style={playerIconStyle}/>}
    </PlayerButton>
  )
}