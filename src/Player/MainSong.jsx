import React from 'react'
import ClassNames from 'classnames'
import { withCustomAudio } from 'react-soundplayer/addons'
import {
  PlayButton,
  Timer,
  VolumeControl,
  Progress,
  Icons,
} from 'react-soundplayer/components'


const PrevButton = ({ className, style, onPrevClick }) => {
  const { PrevIconSVG } = Icons
  const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-prev-btn', className)

  return (
    <button type="button" className={classNames} style={style}
            onClick={onPrevClick}>
      <PrevIconSVG/>
    </button>
  )
}

const NextButton = ({ className, style, onNextClick }) => {
  const { NextIconSVG } = Icons
  const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-next-btn', className)

  return (
    <button type="button" className={classNames} style={style}
            onClick={onNextClick}>
      <NextIconSVG/>
    </button>
  )
}

const PreloaderIconSvg = (props) => (
  <svg
    className="mdl-js sb-soundplayer-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="#FC561E">
    <path opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
          transform="rotate(8.0328 16 16)">
      <animateTransform attributeName="transform" type="rotate" from="0 16 16"
                        to="360 16 16" dur="0.8s" repeatCount="indefinite"/>
    </path>
  </svg>
)

class MainSong extends React.Component {
  render() {
    const {
      currentTime,
      duration,
      isMuted,
      playing,
      preloadType,
      seeking,
      soundCloudAudio,
      trackTitle,
      volume,
    } = this.props

    return (
      <React.Fragment>
        <div className="flex-column items-center bg-darken-1 red rounded">
          <Progress
            value={currentTime / duration * 100 || 0}
            soundCloudAudio={soundCloudAudio}/>
          <div className="flex items-center">
            <PrevButton onPrevClick={this.props.prevSong}/>
            <PlayButton
              className="flex"
              playing={playing}
              seeking={seeking}
              seekingIcon={<PreloaderIconSvg/>}
              soundCloudAudio={soundCloudAudio}
            />
            <NextButton onNextClick={this.props.nextSong}/>
            <VolumeControl
              className="flex items-center"
              rangeClassName="mb1"
              isMuted={isMuted}
              volume={volume}
              soundCloudAudio={soundCloudAudio}
            />
            <div className="h5 mx2 caps truncated-text">{trackTitle}</div>
            <Timer
              className="h6 mr1"
              duration={duration}
              currentTime={currentTime}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withCustomAudio(MainSong)
