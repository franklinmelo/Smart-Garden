import React, { useState } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import theme from '../../Theme';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Switch } from '@material-ui/core';

function ConfigView({ classes }) {
  const [operationState, setOperationState] = useState({
    operationMode: true
  });

  const handleChange = name => event => {
    setOperationState({ ...operationState, [name]: event.target.checked });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justify="center"
        style={{ height: '100vh' }}
      >
        <Grid item container direction="row" justify="center">
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem>
                <Typography variant="inherit" noWrap>
                  Modo de operção Manual/Automatico
                </Typography>
                <Switch
                  checked={operationState.operationMode}
                  onChange={handleChange('operationMode')}
                  value="operationMode"
                  inputProps={{ 'aria-label': 'teste' }}
                  color="primary"
                />
              </MenuItem>
              <MenuItem>
                <Typography variant="inherit">
                  A very long text that overflows
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="inherit" noWrap>
                  A very long text that overflows
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(styles)(ConfigView);
