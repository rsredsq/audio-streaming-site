import React from 'react'
import {
  PlayerButton,
  playerIconStyle,
  VolumeControlContainer,
  VolumeControlRange,
} from '../styled'
import { VolumeIconMuteSVG, VolumeIconLoudSVG } from '../icons'

export default ({ isMuted, volume, setVolume, muteUnmute }) => {
  const changeVolume = (e) => {
    const volume = parseFloat(e.target.value)
    if (isMuted) muteUnmute()
    setVolume(volume)
  }

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
          onChange={(e) => changeVolume(e)}/>
      </div>
    </VolumeControlContainer>
  )
}