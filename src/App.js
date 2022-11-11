import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import Index from './components/Header/Index';
import JobCard from './components/Job/JobCard';
import NewJobModal from './components/Job/NewJobModal';
import SearchBar from './components/SearchBar/SearchBar';
import theme from './theme/theme';
import { useState } from 'react';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import db from './firebase/Config';

function App() {

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "jobs");
  const [newJobModal, setNewJobModal] = useState(false)



  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id, postedOn: doc.data().postedOn.toDate() })))
  };
  getUsers();



  const postJob = async jobDetails => {
    await addDoc(collection(db, 'jobs'), {
      ...jobDetails,
      postedOn: serverTimestamp()
    });

  }
  return (
    <ThemeProvider theme={theme}>
      <Index openNewJobModal={() => setNewJobModal(true)} />
      <NewJobModal closeJobModal={() => setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob} />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          {users.map(job => <JobCard key={job.id}{...job} />)}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
