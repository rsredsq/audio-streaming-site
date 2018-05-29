import React from 'react'
import { Storage } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { format } from 'date-fns'
import Player from '../Player'
import { ToastContainer, toast } from 'react-toastify'

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
      .then(list => {
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
        this.onSuccess('Playlist was updated')
      })
      .catch(res => {
        this.setState({ loadingList: false })
        this.onError('Error during get playlist')
      })
  }

  titleFromFileName = fileName => {
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

  onError = mes => {
    toast.error(`🔥 ${mes}`, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  onInfo = mes => {
    toast.info(`🚀 ${mes}`, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  onSuccess = mes => {
    toast.success(`🎵 ${mes}`, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  render() {
    return (
      <React.Fragment>
        <Player
          music={this.state.music}
          loadingList={this.state.loadingList}
          getSong={this.getSong}
          addSong={this.addSong}
          deleteSong={this.deleteSong}
          onError={this.onError}
        />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </React.Fragment>
    )
  }
}

export default withAuthenticator(Main, true)
