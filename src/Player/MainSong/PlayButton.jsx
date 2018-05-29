import React from 'react'
import { PlayIconSVG, PauseIconSVG, PreloaderIconSvg } from '../icons'
import { PlayerButton, playerIconStyle } from '../styled'

export default ({ playPause, songState }) => {
  return (
    <PlayerButton type="button"
                  onClick={playPause}>
      {(songState === 'pause' || !songState) && <PlayIconSVG style={playerIconStyle}/>}
      {songState === 'playing' && <PauseIconSVG style={playerIconStyle}/>}
      {songState === 'loading' && <PreloaderIconSvg style={playerIconStyle}/>}
    </PlayerButton>
  )
}