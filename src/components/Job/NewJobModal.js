import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import './NewJobModal.css'
import CloseIcon from '@mui/icons-material/Close';

const NewJobModal = () => {

    const skills = ["JavaScript", "NodeJS", "HTML", "CSS", "MongoDB", "ExpressJs"];
    return (
        <Dialog open={false} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton><CloseIcon /></IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Job Title*' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline defaultValue={"Full time"} className="si" >
                            <MenuItem value="Full time" variant="filled">Full Time</MenuItem>
                            <MenuItem value="Part time">Part Time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Company Name*' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Company URL*' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select fullWidth disableUnderline defaultValue={"Remote"} className="si">
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="InOffice">In-office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Job Link' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput placeholder='Job Description*' multiline rows={4} disableUnderline fullWidth ></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box className='skillchip'>
                        {skills.map(skills => <Box key={skills} className="skill" rows={2}>{skills}</Box>)}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box width="100%" display="flex" justifyContent="space-between">
                    <Typography variant="caption">*Required Fields</Typography>
                    <Button variant="contained" disableElevation color="primary">Post Job</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default NewJobModal
