import React from 'react'
import {
  PlayerButton,
  playerIconStyle,
  VolumeControlContainer,
  VolumeControlRange,
} from './styled'
import { VolumeIconMuteSVG, VolumeIconLoudSVG } from '../icons'

export default ({ isMuted, volume, setVolume, muteUnmute }) => {
  return (
    <VolumeControlContainer>
      <PlayerButton onClick={muteUnmute}>
        {isMuted ?
          <VolumeIconMuteSVG style={playerIconStyle}/> :
          <VolumeIconLoudSVG style={playerIconStyle}/>}
      </PlayerButton>
      <div>
        <VolumeControlRange
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}/>
      </div>
    </VolumeControlContainer>
  )
}