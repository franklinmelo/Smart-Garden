import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarView from './components/appbar/Appbar';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './routes';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <AppBarView />
          <Grid container>
            <Route component={Routes} />
          </Grid>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
