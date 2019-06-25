import React from 'react';
import './App.css';
import AppBarView from './components/appbar/Appbar';
import DashBoardView from './pages/dashBoard/DashBoardView';
import Grid from '@material-ui/core/Grid';
import ConfigView from './pages/configView/ConfigView';

function App() {
  return (
    <div className="App">
      <AppBarView />
      <Grid container>
        {/* <DashBoardView /> */}
        <ConfigView />
      </Grid>
    </div>
  );
}

export default App;
