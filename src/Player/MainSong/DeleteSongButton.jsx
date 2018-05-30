import React from 'react'
import { DeleteIconSVG } from '../icons'
import { PlayerButton, playerIconStyle } from '../styled'

export default ({ onDelete }) => {
  return (
    <PlayerButton type="button"
                  onClick={onDelete}>
      <DeleteIconSVG style={playerIconStyle}/>
    </PlayerButton>
  )
}