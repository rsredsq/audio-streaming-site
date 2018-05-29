import React from 'react'
import ReactPlayer from 'react-player'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import PlayButton from './PlayButton'
import Timer from './Timer'
import Progress from './Progress'
import VolumeControl from './VolumeControl'
import TrackTitle from './TrackTitle'
import { PlayerControls, MainSongContainer } from '../styled'

class MainSong extends React.Component {
  state = {
    volume: 0.5,
    seeking: false,
    muted: false,
    duration: 0,
    played: 0,
    playedSeconds: 0,
    loaded: 0,
  }

  ref = (player) => {
    this.player = player
  }

  setSongState = (songState) => {
    this.props.setSongState(songState)
  }

  playPause = () => {
    const { songState, setSongState } = this.props
    if (songState === 'pause') {
      setSongState('playing')
    }
    if (songState === 'playing') {
      setSongState('pause')
    }
  }

  setVolume = (volume) => {
    this.setState({ volume })
  }

  setMuted = (muted) => {
    this.setState({ muted })
  }

  muteUnmute = () => {
    this.setState((prevState) => ({
      muted: !prevState.muted,
    }))
  }

  setDuration = (duration) => {
    this.setState({ duration })
  }

  setPlayed = (played) => {
    this.setState({ played })
  }

  onSeekMouseDown = () => {
    this.setState({ seeking: true })
  }

  onSeekChange = (amount) => {
    this.setPlayed(amount)
  }

  onSeekMouseUp = (amount) => {
    this.setState({ seeking: false })
    this.seekTo(amount)
  }

  seekTo = (amount) => {
    this.player.seekTo(amount)
  }

  onProgress = (progressState) => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(progressState)
    }
  }

  onDuration = (duration) => {
    this.setDuration(duration)
  }

  render() {
    const {
      streamUrl,
      trackTitle,
      onPrevSong,
      onNextSong,
      onError,
      songState,
      playing,
    } = this.props

    const {
      volume,
      muted,
      duration,
      playedSeconds,
      played,
      loaded,
    } = this.state

    return (
      <MainSongContainer>
        <ReactPlayer
          ref={this.ref}
          style={{ display: 'none' }}
          url={streamUrl}
          playing={playing}
          volume={volume}
          muted={muted}
          onReady={() => this.setSongState('pause')}
          onStart={() => this.setSongState('playing')}
          onPlay={() => this.setSongState('playing')}
          onPause={() => this.setSongState('pause')}
          onBuffer={() => this.setSongState('loading')}
          onSeek={() => this.setSongState('loading')}
          onEnded={onNextSong}
          onError={() => onError('Couldn\'t load song')}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />
        <Progress
          played={played}
          loaded={loaded}
          onSeekMouseDown={this.onSeekMouseDown}
          onSeekChange={this.onSeekChange}
          onSeekMouseUp={this.onSeekMouseUp}
        />
        <PlayerControls>
          <PrevButton onPrevClick={onPrevSong}/>
          <PlayButton
            songState={songState}
            playPause={this.playPause}
          />
          <NextButton onNextClick={onNextSong}/>
          <VolumeControl
            isMuted={muted}
            volume={volume}
            setVolume={this.setVolume}
            muteUnmute={this.muteUnmute}
          />
          <TrackTitle>{trackTitle}</TrackTitle>
          <Timer
            duration={duration}
            currentTime={playedSeconds}/>
        </PlayerControls>
      </MainSongContainer>
    )
  }
}

export default MainSong
