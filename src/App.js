import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import './App.css';
import Index from './components/Header/Index';
import JobCard from './components/Job/JobCard';
import SearchBar from './components/SearchBar/SearchBar';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Index />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />

        </Grid>
      </Grid>

    </ThemeProvider>
  );
}

export default App;
