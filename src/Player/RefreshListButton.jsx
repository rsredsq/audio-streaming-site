import React from 'react'
import { RefreshListButton } from './styled'

export default ({ onRefresh, refreshing }) => {
  return (
    <RefreshListButton
      onClick={onRefresh}>{refreshing ? 'refreshing...' : 'update play list'}</RefreshListButton>
  )
}
