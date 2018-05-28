import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Song from './Song'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

class PlayList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Grid>
          <Row>
            {this.props.music.map((song, id) => (
              <Col sm={12} lgOffset={1} lg={10} key={`row-song-${id}`}>
                <Song
                  playing={id === this.props.activeSong}
                  date={song.date}
                  trackTitle={song.title}
                  play={this.props.playSong}
                  key={`song-${id}`}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default PlayList