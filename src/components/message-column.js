import React from 'react'
import { Typography, Grid } from '@material-ui/core'

import { Message } from './message'

export const MessageColumn = ({ type, messages, handleRemove}) => {

  const title = type === 1 ? 'Error Type 1' : type === 2 ? 'Warning Type 2' : 'Info Type 3'

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6">{ title }</Typography>
      <Typography variant="body1" style={{ marginBottom: '20px' }}>
        Count { messages.length }
      </Typography>
      {
        messages.reverse().map((msg, index) => ( <Message key={index} message={msg} handleRemove={() => handleRemove(msg)} /> ))
      }
    </Grid>
  )
}
