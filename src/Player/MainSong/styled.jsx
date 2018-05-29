import styled from 'styled-components'

export const playerIconStyle = {
  width: '1.2em',
  height: '1.2em',
  position: 'relative',
  verticalAlign: 'middle',
}

export const MainSongContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.0625);
  color: #ff4136;
  border-radius: 3px;
`

export const PlayerButton = styled.button`
  display: inline-block;
  background-color: transparent;
  color: #fc561e;
  font-size: 1em;
  padding: 1rem;
  margin: 0;
  height: auto;
  vertical-align: middle;
  border-radius: 3px;
  text-decoration: none;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: 0.05s ease;
  transition: transform, box-shadow, 0.05s ease;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.0625);
    box-shadow: none;
  }

  &:active {
    transform: scale(1);
    box-shadow: inset 0 0 0 2px #fc561e;
  }
`

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
`

export const PlayerProgressContainer = styled.div`
  background-color: #ddd;
  width: 100%;
  height: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`

export const PlayerProgressPlayed = styled.div`
  width: ${props => `${props.played * 100}%`}
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #FC561E;
  height: 100%;
  transition: width .2s ease-in;
`

export const PlayerProgressLoaded = styled.div`
  width: ${props => `${props.loaded * 100}%`}
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #787878;
  height: 100%;
  transition: width .2s ease-in;
`

export const TrackTitle = styled.span`
  display: flex;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 1rem;
  text-transform: uppercase;
`

export const Timer = styled.div`
  margin: 0 1rem;
  display: flex;
`

export const VolumeControlContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover div {
    width: 80px;
  }

  & div {
    overflow: hidden;
    width: 0;
    -webkit-transition: width 0.2s ease-out;
    transition: width 0.2s ease-out;
    position: relative;
  }
`

export const VolumeControlRange = styled.input.attrs({
  type: 'range',
  min: '0',
  max: '1',
  step: 'any',
})`
  cursor: pointer;
  height: 20px;
  margin-top: 0.5em;
  -webkit-appearance: none;
  width: 98%;

  &:focus {
    outline: none;
  }

  /* track */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.2em;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 1.3px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 0.2em;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 1.3px;
  }

  &::-ms-track {
    width: 100%;
    height: 0.2em;
    cursor: pointer;
    animate: 0.2s;
    background: #ddd;
    border-radius: 1.3px;
  }

  /* thumb dial */
  &::-moz-range-thumb {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fc561e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4em;
  }

  &::-webkit-slider-thumb {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fc561e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4em;
  }

  &::-ms-thumb {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fc561e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -0.4em;
  }

  /* progress fill */
  &::-ms-fill-lower {
    background: #fc561e;
  }
`
