import React from 'react'
import MainSong from './MainSong'
import PlayList from './PlayList'
import DragZone from './DragZone'

// TODO: shuffle music
// TODO: loop: 'none' // none, once, loop
// TODO: search music
// TODO: reordering music

class Player extends React.Component {
  mainSongRef = React.createRef()

  state = {
    activeSongFile: null,
    activeSongUrl: null,
    activeSongTitle: null,
    songState: null, // pause, playing, loading
  }

  componentWillReceiveProps(newProps) {
    this.setState((prevState) => {
      const music = newProps.music
      const activeSongFile = prevState.activeSongFile
      if (!activeSongFile && music.length !== 0) {
        this.setSong(music[0])
        return {
          music: newProps.music,
        }
      }

      return { music: newProps.music }
    })
  }

  setSong(song, afterSet) {
    this.props
      .getSong(song.fileName)
      .then((songUrl) => {
        this.setState({
          activeSongFile: song.fileName,
          activeSongUrl: songUrl,
          activeSongTitle: song.title,
        }, () => {
          if (this.mainSongRef.current) {
            this.mainSongRef.current.componentWillUnmount()
            this.mainSongRef.current.componentDidMount()
            this.pauseMusic()
            afterSet && afterSet()
          }
        })
      })
  }

  chooseSong = (song) => {
    if (song.fileName !== this.state.activeSongFile) {
      this.setSong(song, () => this.playMusic())
    } else {
      if (!this.state.playing) {
        this.playMusic()
      } else {
        this.pauseMusic()
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
    this.setState({ songState })
  }

  onError = () => {
    alert('Error during playing audio')
  }

  render() {
    return (
      <DragZone onDrop={this.onDrop}>
        {/*<div>*/}
        {/*<SearchMusic/>*/}
        {/*<TitleSortButton/>*/}
        {/*<DateSortButton/>*/}
        {/*<AddSongButton/>*/}
        {/*<RefreshListButton/>*/}
        {/*</div>*/}
        {/*<PlayList*/}
        {/*music={this.props.music}*/}
        {/*loadingList={this.props.loadingList}*/}
        {/*activeSong={this.activeSongFile}*/}
        {/*songState={this.songState}*/}
        {/*playSong={this.chooseSong}*/}
        {/*deleteSong={this.deleteSong}*/}
        {/*/>*/}
        <MainSong
          streamUrl={this.state.activeSongUrl}
          trackTitle={this.state.activeSongTitle}
          onNextSong={this.nextSong}
          onPrevSong={this.prevSong}
          setSongState={this.setSongState}
          onError={this.onError}/>
      </DragZone>
    )
  }
}

export default Player