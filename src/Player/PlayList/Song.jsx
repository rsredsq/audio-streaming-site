import React from 'react'
import styled from 'styled-components'

const PlayButton = styled.button``;

export default ({playing, loading, play, trackTitle, date}) => (
  <React.Fragment>
    <div
      className="mb1 p1 flex-column items-center bg-darken-1 red rounded">
      <div className="flex items-center">
        <PlayButton
          playing={playing}
          onClick={play}
        />
        <div className="h5 mx2 caps truncated-text">{trackTitle}</div>
        <div className="h6 mr1">{date}</div>
      </div>
    </div>
  </React.Fragment>
)
