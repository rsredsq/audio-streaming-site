import React from 'react'
import MainSong from './MainSong'
import PlayList from './PlayList'
import DragZone from './DragZone'
import RefreshListButton from './RefreshListButton'
import { PlayListControlsContainer } from './styled'

class Player extends React.Component {
  state = {
    activeSongFile: null,
    activeSongUrl: null,
    activeSongTitle: null,
    songState: null, // pause, playing, loading
  }

  componentWillReceiveProps(newProps) {
    const music = newProps.music
    const activeSongFile = this.state.activeSongFile
    if (!activeSongFile && music.length !== 0) {
      this.setSong(music[0], 'pause')
    }
  }

  setSong(song, songState = 'loading') {
    console.log('setSong - loading', 'After', songState)
    this.setState({
      activeSongFile: song.fileName,
      activeSongTitle: song.title,
      activeSongUrl: null,
      songState: 'loading',
    })

    this.props
      .getSong(song.fileName)
      .then((songUrl) => {
        this.setState({
          activeSongUrl: songUrl,
          songState: songState,
        })
      })
  }

  chooseSong = (song) => {
    if (song.fileName !== this.state.activeSongFile) {
      if (!this.state.activeSongFile) this.setSong(song, 'pause')
      else this.setSong(song)
    } else {
      if (this.state.songState === 'pause') {
        console.log('chooseSong - playing')
        this.setState({ songState: 'playing' })
      }
      if (this.state.songState === 'playing') {
        console.log('chooseSong - pause')
        this.setState({ songState: 'pause' })
      }
    }
  }

  nextSong = () => {
    const { music } = this.props
    if (music.length === 0) return
    const { activeSongFile } = this.state
    const curSongInd = music.findIndex((song) => (song.fileName === activeSongFile))

    if (curSongInd + 1 === music.length) {
      this.chooseSong(music[0])
    }
    else {
      this.chooseSong(music[curSongInd + 1])
    }
  }

  prevSong = () => {
    const { music } = this.props
    if (music.length === 0) return
    const { activeSongFile } = this.state
    const curSongInd = music.findIndex((song) => (song.fileName === activeSongFile))

    if (curSongInd - 1 < 0) {
      this.chooseSong(music[music.length - 1])
    }
    else {
      this.chooseSong(music[curSongInd - 1])
    }
  }

  deleteSong = () => {

  }

  addSong = (song) => {
    this.props.addSong(song)
  }

  addSongs = (files) => {
    files.forEach((file) => {
      this.addSong(file)
    })
  }

  setSongState = (songState) => {
    console.log('setSongState', songState)
    this.setState({ songState })
  }

  onError = () => {
    this.props.onError('Error during playing audio')
  }

  render() {
    return (
      <DragZone onDrop={this.addSongs}>
        <PlayListControlsContainer>
          <RefreshListButton
            onRefresh={this.props.updateMusicList}
            refreshing={this.props.loadingList}
          />
        </PlayListControlsContainer>
        <PlayList
          music={this.props.music}
          activeSong={this.state.activeSongFile}
          songState={this.state.songState}
          chooseSong={this.chooseSong}
          deleteSong={this.deleteSong}
        />
        <MainSong
          streamUrl={this.state.activeSongUrl}
          trackTitle={this.state.activeSongTitle}
          songState={this.state.songState}
          playing={this.state.songState !== 'pause'}
          onNextSong={this.nextSong}
          onPrevSong={this.prevSong}
          setSongState={this.setSongState}
          onError={this.onError}/>
      </DragZone>
    )
  }
}

export default Player