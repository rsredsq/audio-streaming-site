import React from 'react'
import SearchMusic from './SearchMusic'
import MainSong from './MainSong'
import PlayList from './PlayList'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class Player extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSong: 0,
      activeSongUrl: null,
      shuffle: false,
      loop: 'none', // none, once, loop
      music: props.music
    }
  }

  deleteSong = () => {

  }

  addSong = () => {

  }

  chooseSong = (songId) => {

  }

  nextSong() {

  }

  prevSong() {

  }

  updateMainSongUrl() {

  }

  render() {
    return (
      <Wrapper>
        <SearchMusic/>
        <PlayList
          music={this.state.music}
          activeSong={this.activeSong}
          playSong={this.chooseSong}
          deleteSong={this.deleteSong}
        />
        <MainSong
          // streamUrl={this.state.activeSongUrl}
          nextSong={this.nextSong}
          prevSong={this.prevSong}/>
      </Wrapper>
    )
  }
}

export default Player