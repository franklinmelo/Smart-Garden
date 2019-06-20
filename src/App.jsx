import React from 'react';
import './App.css';
import AppBarView from './components/appbar/Appbar';
import DashBoardView from './pages/dashBoard/DashBoardView';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <AppBarView />
      <Grid container>
        <DashBoardView />
      </Grid>
    </div>
  );
}

export default App;
