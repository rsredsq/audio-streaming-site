import React from 'react'
import { PrevIconSVG } from '../icons'
import { PlayerButton, playerIconStyle } from './styled'

export default ({ onPrevClick }) => {
  return (
    <PlayerButton type="button"
                  onClick={onPrevClick}>
      <PrevIconSVG style={playerIconStyle}/>
    </PlayerButton>
  )
}