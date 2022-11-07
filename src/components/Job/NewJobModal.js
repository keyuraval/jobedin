import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import './NewJobModal.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const NewJobModal = () => {

    const [jobDetails, setjobDetails] = useState({
        title: "",
        type: "Full time",
        comapanyName: "",
        companyUrl: "",
        location: "Remote",
        link: "",
        description: "",
        skills: [],
    });

    const handleChange = e => {
        // e.persist();
        setjobDetails(oldState => ({ ...oldState, [e.target.name]: e.target.value }));
    };
    console.log(jobDetails);
    const skills = ["JavaScript", "NodeJS", "HTML", "CSS", "MongoDB", "ExpressJs"];

    const addRemoveSkill = (skill) => jobDetails.skills.find(s => skill === s) ? setjobDetails((oldState) => ({
        ...oldState, skills: oldState.skills.filter((s) => s !== skill)
    })) : setjobDetails((oldState) => ({
        ...oldState, skills: oldState.skills.concat(skill)
    }));


    return (
        <Dialog open={true} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Post Job
                    <IconButton><CloseIcon /></IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="title" value={jobDetails.title} autoComplete="off" placeholder='Job Title*' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={handleChange} name="type" value={jobDetails.type} fullWidth disableUnderline className="si" >
                            <MenuItem value="Full time" >Full Time</MenuItem>
                            <MenuItem value="Part time">Part Time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="comapanyName" value={jobDetails.companyName} autoComplete="off" placeholder='Company Name*' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="comapanyUrl" value={jobDetails.companyUrl} autoComplete="off" placeholder='Company URL*' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={6}>
                        <Select onChange={handleChange} name="location" value={jobDetails.location} fullWidth disableUnderline className="si">
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="InOffice">In-office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput onChange={handleChange} name="link" value={jobDetails.link} autoComplete="off" placeholder='Job Link' disableUnderline fullWidth ></FilledInput>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput onChange={handleChange} name="description" value={jobDetails.description} autoComplete="off" placeholder='Job Description*' multiline rows={4} disableUnderline fullWidth ></FilledInput>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography>Skills</Typography>
                    <Box className='skillchip'>
                        {skills.map(skills => <Box onClick={() => addRemoveSkill(skills)} key={skills} className="skill" rows={2}>{skills}</Box>)}
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
