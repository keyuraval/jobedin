import { Button, Grid, ListItem, MenuItem, Select } from '@mui/material'
import './SearchBar.css'

import React from 'react'


const SearchBar = () => {
    return (
        <div className='sb'>
            <Grid xs={4}>
                <ListItem>
                    <Select disableUnderline defaultValue={"Full time"} className="si">
                        <MenuItem value="Full time">Full Time</MenuItem>
                        <MenuItem value="Part time">Part Time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                    </Select>
                </ListItem>
            </Grid>
            <Grid xs={4}>
                <ListItem><Select disableUnderline defaultValue={"Remote"} className="si">
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="InOffice">In-office</MenuItem>
                </Select></ListItem>
            </Grid>
            <Grid xs={4}>
                <ListItem>
                    <Button variant="contained" className="sbt">Search</Button>
                </ListItem>
            </Grid>
        </div>
    )
}

export default SearchBar