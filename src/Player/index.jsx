import React from 'react'
import MainSong from './MainSong'
import PlayList from './PlayList'
import DragZone from './DragZone'

// TODO: shuffle music
// TODO: loop: 'none' // none, once, loop
// TODO: search music
// TODO: reordering music

class Player extends React.Component {
  state = {
    activeSongFile: null,
    activeSongUrl: null,
    activeSongTitle: null,
    songState: null, // pause, playing, loading
  }

  constructor(props) {
    super(props)

    const music = props.music
    const activeSongFile = this.state.activeSongFile
    if (!activeSongFile && music.length !== 0) {
      this.setSong(music[0])
    }
  }

  componentWillReceiveProps(newProps) {
    const music = newProps.music
    const activeSongFile = this.state.activeSongFile
    if (!activeSongFile && music.length !== 0) {
      this.setSong(music[0])
    }
  }

  setSong(song) {
    console.log('setSong - loading')
    this.setState({
      activeSongFile: song.fileName,
      activeSongTitle: song.title,
      activeSongUrl: null,
      songState: 'loading',
    })

    this.props
      .getSong(song.fileName)
      .then((songUrl) => {
        console.log('setSong - pause')
        this.setState({
          activeSongUrl: songUrl,
          songState: 'pause',
        })
      })
  }

  chooseSong = (song) => {
    if (song.fileName !== this.state.activeSongFile) {
      console.log('chooseSong - playing')
      this.setSong(song)
      this.setState({ songState: 'playing' })
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

  }

  prevSong = () => {

  }

  deleteSong = () => {

  }

  addSong = (song) => {
    this.props.addSong(song)
  }

  onDrop = (files) => {
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
      <DragZone onDrop={this.onDrop}>
        {/*<div>*/}
        {/*<AddSongButton/>*/}
        {/*<RefreshListButton/>*/}
        {/*</div>*/}
        <PlayList
          music={this.props.music}
          loadingList={this.props.loadingList}
          activeSong={this.activeSongFile}
          songState={this.state.songState}
          playSong={this.chooseSong}
          deleteSong={this.deleteSong}
        />
        <MainSong
          streamUrl={this.state.activeSongUrl}
          trackTitle={this.state.activeSongTitle}
          songState={this.state.songState}
          playing={this.state.songState === 'playing'}
          onNextSong={this.nextSong}
          onPrevSong={this.prevSong}
          setSongState={this.setSongState}
          onError={this.onError}/>
      </DragZone>
    )
  }
}

export default Player