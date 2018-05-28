import Dropzone from 'react-dropzone'
import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2.5em 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  z-index: 1000;
`

const dragZoneStyle = {
  display: 'flex',
  width: '100%',
  flex: '1',
}

class DragZone extends React.Component {
  state = {
    draggingFile: false,
  }

  onDrop = files => {
    this.props.onDrop(files)
    this.setState({ draggingFile: false })
  }

  onDragEnter = () => {
    this.setState({ draggingFile: true })
  }

  onDragLeave = () => {
    this.setState({ draggingFile: false })
  }

  render() {
    return (
      <Dropzone
        disableClick
        style={dragZoneStyle}
        accept="audio/*"
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        {this.state.draggingFile && <Overlay>Drop music here</Overlay>}
        {this.props.children}
      </Dropzone>
    )
  }
}

export default DragZone