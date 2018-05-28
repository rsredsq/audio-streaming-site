import React from 'react'
import { Storage } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { format } from 'date-fns'
import Player from '../Player'
import styled from 'styled-components'

const MUSIC_FOLDER = 'music/'

Storage.configure({ level: 'private' })

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

class Main extends React.Component {
  state = {
    music: [],
  }

  componentDidMount() {
    this.updateMusicList()
  }

  updateMusicList() {
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
        console.log(music)
        this.setState({ music })
      })
      .catch((res) => {
        alert('Error during get list')
        console.log(res)
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
      <Wrapper>
        <Player
          music={this.state.music}
          getSong={this.getSong}
          addSong={this.addSong}
          deleteSong={this.deleteSong}
        />
      </Wrapper>
    )
  }
}

export default Main
