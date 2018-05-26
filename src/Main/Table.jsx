import React from 'react'
import ReactTable from 'react-table'
import Dropzone from 'react-dropzone'
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

class Table extends React.PureComponent {
  columns = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Upload Date',
      accessor: 'date',
    },
    {
      width: 100,
      Cell: row => <button onClick={() => this.onDelete(row)}>Delete</button>,
    },
  ]

  state = {
    draggingFile: false,
  }

  onDrop = files => {
    this.props.onDrop(files)
    this.setState({ draggingFile: false })
  }

  tableProps = (state, rowInfo, column, instance) => {
    return {
      onClick: (e, handleOriginal) => {
        if (rowInfo && column.id) {
          this.props.onRowClick(rowInfo.original)
        }
        if (handleOriginal) {
          handleOriginal()
        }
      },
    }
  }

  onDragEnter = () => {
    this.setState({ draggingFile: true })
  }

  onDragLeave = () => {
    this.setState({ draggingFile: false })
  }

  onDelete = row => {
    this.props.onDelete(row.original)
  }

  render() {
    return (
      <Dropzone
        disableClick
        style={{}}
        accept="audio/*"
        onDrop={this.onDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
      >
        {this.state.draggingFile && <Overlay>Drop music here</Overlay>}
        <ReactTable
          noDataText="No music found :( You can drag and drop your music here"
          data={this.props.music}
          columns={this.columns}
          getTdProps={this.tableProps}
        />
      </Dropzone>
    )
  }
}

export default Table
