import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
    return (
        <Box py={10} bgcolor="secondary.main" color="white">
            <Grid container justify="center" justifyContent="center">
                <Grid item xs={10}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="h4">
                            Open Job Listing
                        </Typography>
                        <Button variant="contained" color="primary" disableElevation>Post a Job</Button>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Index