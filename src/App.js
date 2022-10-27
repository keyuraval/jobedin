import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import './App.css';
import Index from './components/Header/Index';
import JobCard from './components/Job/JobCard';
import NewJobModal from './components/Job/NewJobModal';
import SearchBar from './components/SearchBar/SearchBar';
import jobData from './dummyData'
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Index />
      <NewJobModal />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          {jobData.map(job => <JobCard key={job.id}{...job} />)}
        </Grid>
      </Grid>

    </ThemeProvider>
  );
}

export default App;
