import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import './JobCard.css'

const skills = ["JavaScript", "ReactJS", "NodeJS"];

const JobCard = () => {
    return (
        <Box className="jb">
            <Box>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="subtitle1">Frontend Dev</Typography>
                        <Typography variant="subtitle1">Google</Typography>
                    </Grid>
                    <Grid item container xs className='jbname'>
                        {skills.map(skills => <Grid key={skills} item>{skills}</Grid>)}
                    </Grid>
                    <Grid item container direction={"column"} alignItems="flex-end" xs>
                        <Grid item> <Typography variant='caption'>2577 Min ago |Full time | Remote</Typography></Grid>
                        <Box mt={2}>
                            <Grid item> <Button variant='outlined'>Check</Button></Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}

export default JobCard