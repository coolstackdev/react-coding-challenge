import React, { useState, useEffect } from 'react'
import { Box, IconButton, Typography, makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

export const Snackbar = ({ open, message, handleClose}) => {
  const classes = useStyles()

  const [ isShow, setIsShow ] = useState(open)

  useEffect(() => {
    setIsShow(open)

    const timeout = setTimeout(() => {
      setIsShow(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [open, message])

  return (
    <Box className={classes.container} style={{ visibility: isShow ? 'visible' : 'hidden' }}>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <Typography>{ message }</Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: () => ({
    width: '400px',
    fontSize: '16px',
    backgroundColor: theme.palette.error.main,
    display: 'flex',
    alignItems: 'center',
    padding: '4px 10px',
    marginBottom: '6px',
    borderRadius: '4px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  })
}))
