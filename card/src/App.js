import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Course } from './Course';
import Angular from './images/Angular.jpg';
import Bootstrap from './images/Bootstrap.jpg';
import Csharp from './images/Csharp.jpg';
import Web from './images/Web.jpg';


function App() {
  return (
    <div >
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>
          Card Project
        </Toolbar>
      </AppBar>
      <Container maxWidth = 'lg'>
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
           <Course 
           image = {Angular}
           title = 'Angular'
           description = 'This is the best Angular course.' />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course 
           image = {Bootstrap}
           title = 'Bootstrap'
           description = 'This is the best Bootstrap course.' />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course 
           image = {Csharp}
           title = 'C#'
           description = 'This is the best CSharp course.' />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <Course 
           image = {Web}
           title = 'Complete Web'
           description = 'This is the best Complete Web course.' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
