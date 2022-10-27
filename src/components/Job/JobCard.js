import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import './JobCard.css'
import { differenceInMinutes } from 'date-fns'

// const skills = ["JavaScript", "ReactJS", "NodeJS"];

const JobCard = (props) => {
    return (
        <Box className="jb">
            <Box>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="subtitle1">{props.title}</Typography>
                        <Typography variant="subtitle1">{props.companyName}</Typography>
                    </Grid>
                    <Grid item container xs className='jbname'>
                        {props.skills.map(skill => <Grid key={skill} item>{skill}</Grid>)}
                    </Grid>
                    <Grid item container direction={"column"} alignItems="flex-end" xs>
                        <Grid item> <Typography variant='caption'>{differenceInMinutes(Date.now(), props.postedOn)} min ago|{props.type}|{props.location}</Typography></Grid>
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