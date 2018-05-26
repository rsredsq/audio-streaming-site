import React from 'react'
import { Storage } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { format } from 'date-fns'
import { Howl, Howler } from 'howler'
import Table from './Table'

const MUSIC_FOLDER = 'music/'

Storage.configure({ level: 'private' })

class Main extends React.Component {
  state = {
    music: [],
  }

  onFileDrop = files => {
    files.forEach(file => {
      console.log(file)
      Storage.put(MUSIC_FOLDER + file.name, file)
        .then(res => {
          this.updateMusicList()
        })
        .catch(res => {
          alert('Error during uploading song')
          console.error(res)
        })
    })
  }

  componentDidMount() {
    this.updateMusicList()
  }

  updateMusicList() {
    Storage.list(MUSIC_FOLDER).then(res => {
      const music = res.map(it => {
        return {
          title: it.key.slice(6),
          date: format(it.lastModified.toString(), 'MM/DD/YYYY'),
        }
      })
      this.setState({ music })
    })
  }

  playSong = song => {
    Storage.get(MUSIC_FOLDER + song.title).then(res => {
      const sound = new Howl({
        src: [res],
        html5: true,
      })

      sound.play()
    })
  }

  deleteSong = song => {
    Storage.remove(MUSIC_FOLDER + song.title).then(res => {
      this.updateMusicList()
    })
  }

  render() {
    return (
      <Table
        music={this.state.music}
        onRowClick={this.playSong}
        onDrop={this.onFileDrop}
        onDelete={this.deleteSong}
      />
    )
  }
}

export default withAuthenticator(Main)
