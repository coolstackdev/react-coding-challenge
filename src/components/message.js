import React from 'react'
import { Box, Button, Typography, makeStyles } from '@material-ui/core'

export const Message = ({ message, handleRemove}) => {
  const classes = useStyles({ message })

  return (
    <Box className={classes.container}>
      <Typography>{ message.message }</Typography>
      <Button onClick={handleRemove}>Clear</Button>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    width: '100%',
    fontSize: '16px',
    backgroundColor: props.message.priority === 1 
      ? theme.palette.error.main 
      : props.message.priority === 2 
          ? theme.palette.warning.main 
          : theme.palette.info.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px 10px',
    marginBottom: '6px',
    borderRadius: '4px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  })
}))
