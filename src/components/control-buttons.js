import React from 'react'
import { Grid, Button } from '@material-ui/core'

export const ControlButtons = ({ isStarted, handleToggle, handleClear }) => {

  return (
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleToggle}
                >
                    {isStarted ? 'STOP' : 'START'}
                </Button>
            </Grid>
            <Grid item>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleClear}
                >
                    CLEAR
                </Button>
            </Grid>
        </Grid>
  )
}
