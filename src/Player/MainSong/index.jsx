import React from 'react'
import ReactPlayer from 'react-player'
import PrevButton from './PrevButton'
import NextButton from './NextButton'
import PlayButton from './PlayButton'
import Timer from './Timer'
import Progress from './Progress'
import VolumeControl from './VolumeControl'
import TrackTitle from './TrackTitle'
import { PlayerControls, MainSongContainer } from './styled'

class MainSong extends React.Component {
  state = {
    playing: false,
    volume: 0.5,
    seeking: false,
    muted: false,
    duration: 0,
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
    songState: null,
  }

  ref = (player) => {
    this.player = player
  }

  setSongState = (songState) => {
    this.setState({ songState }, () => {
      this.props.setSongState(songState)
    })
  }

  setPlaying = (playing) => {
    this.setState({ playing })
  }

  playPause = () => {
    this.setState((prevState) => ({
      playing: !prevState.playing,
    }))
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

  setPlayedSeconds = (playedSeconds) => {
    this.setState({ playedSeconds })
  }

  setLoaded = (loaded) => {
    this.setState({ loaded })
  }

  setLoadedSeconds = (loadedSeconds) => {
    this.setState({ loadedSeconds })
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
    } = this.props

    const {
      volume,
      muted,
      duration,
      playedSeconds,
      played,
      loaded,
      loadedSeconds,
      songState,
    } = this.state

    return (
      <MainSongContainer>
        <ReactPlayer
          ref={this.ref}
          style={{ display: 'none' }}
          url={streamUrl}
          playing={this.state.playing}
          volume={this.state.volume}
          muted={this.state.muted}
          onReady={() => this.setSongState('pause')}
          onStart={() => this.setSongState('playing')}
          onPlay={() => this.setSongState('playing')}
          onPause={() => this.setSongState('pause')}
          onBuffer={() => this.setSongState('loading')}
          onSeek={() => this.setSongState('loading')}
          onEnded={onNextSong}
          onError={onError}
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
