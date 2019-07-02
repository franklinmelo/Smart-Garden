import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBarView from './components/appbar/Appbar';
import DashBoardView from './pages/dashBoard/DashBoardView';
import Grid from '@material-ui/core/Grid';
import ConfigView from './pages/configView/ConfigView';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <AppBarView />
          <Grid container>
            <Switch>
              <Route exact path="/" component={DashBoardView} />
              <Route path="/config" component={ConfigView} />
            </Switch>
          </Grid>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
