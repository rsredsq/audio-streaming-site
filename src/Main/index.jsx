import React from 'react'
import { Storage } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { format } from 'date-fns'
import Player from '../Player'

const MUSIC_FOLDER = 'music/'

Storage.configure({ level: 'private' })

class Main extends React.Component {
  state = {
    music: [],
    loadingList: true,
  }

  componentDidMount() {
    this.updateMusicList()
  }

  updateMusicList() {
    this.setState({ loadingList: true })
    this.getSongsList()
      .then((list) => {
        const music = list.map(song => {
          const date = format(song.lastModified.toString(), 'MM/DD/YYYY')
          const fileName = song.key.slice(6)
          const title = this.titleFromFileName(fileName)
          return {
            fileName,
            title,
            date,
          }
        })
        this.setState({ music, loadingList: true })
      })
      .catch((res) => {
        this.setState({ loadingList: false })
        alert('Error during get list')
      })
  }

  titleFromFileName = (fileName) => {
    const lastDot = fileName.indexOf('.')
    return fileName.slice(0, lastDot)
  }

  getSongsList = () => {
    return Storage.list(MUSIC_FOLDER)
  }

  getSong = song => {
    return Storage.get(MUSIC_FOLDER + song)
  }

  addSong = song => {
    Storage.put(MUSIC_FOLDER + song.name, song).then(() => {
      this.updateMusicList()
    })
  }

  deleteSong = song => {
    Storage.remove(MUSIC_FOLDER + song).then(() => {
      this.updateMusicList()
    })
  }

  render() {
    return (
      <Player
        music={this.state.music}
        loadingList={this.state.loadingList}
        getSong={this.getSong}
        addSong={this.addSong}
        deleteSong={this.deleteSong}
      />
    )
  }
}

export default Main
