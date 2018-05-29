import React from 'react'
import { NextIconSVG } from '../icons'
import { PlayerButton, playerIconStyle } from './styled'

export default ({ onNextClick }) => {
  return (
    <PlayerButton type="button"
                  onClick={onNextClick}>
      <NextIconSVG style={playerIconStyle}/>
    </PlayerButton>
  )
}