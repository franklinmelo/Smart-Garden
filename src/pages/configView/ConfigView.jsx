import React, { useState, useEffect } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import theme from '../../Theme';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ConfigButton from '../../components/configButtons/ConfigButton';

function ConfigView({ classes }) {
  const [flowTime, setFlowTime] = useState(0);
  const [vases, setVases] = useState([]);
  const vasesArray = [
    { name: 'Vaso1', value: 45 },
    { name: 'Vaso2', value: 30 },
    { name: 'Vaso3', value: 10 },
    { name: 'Vaso4', value: 10 }
  ];

  useEffect(() => {
    if (vases.length === 0) setVases(vasesArray);
  }, [vases, vasesArray]);

  function incrementValueVases(name) {
    const mock = vases.map(data => {
      if (data.name === name) {
        return { ...data, value: data.value + 1 };
      } else {
        return data;
      }
    });
    setVases(mock);
  }

  function decrementValueVases(name) {
    const mock = vases.map(data => {
      if (data.name === name) {
        return { ...data, value: data.value === 0 ? 0 : data.value - 1 };
      } else {
        return data;
      }
    });
    setVases(mock);
  }

  function incrementFlowTime() {
    setFlowTime(flowTime + 1);
  }
  function decrementFlowTime() {
    if (flowTime === 0) {
      setFlowTime(0);
    } else {
      setFlowTime(flowTime - 1);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid
          item
          container
          direction="column"
          justify="center"
          className={classes.marginVertical}
        >
          <Typography variant="h4" color="secondary">
            Modo de operação
          </Typography>
          <Grid item className={classes.marginVertical}>
            <ButtonGroup color="primary" size="large">
              <Button>Manual</Button>
              <Button>Automatico</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          className={classes.marginVertical}
        >
          <Typography variant="h4" color="secondary">
            Modo Automatico
          </Typography>
          <ConfigButton
            title="tempo de vazão"
            value={flowTime}
            sufix="seg"
            incrementValue={incrementFlowTime}
            decrementValue={decrementFlowTime}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          className={classes.marginVertical}
        >
          <Typography variant="h5" color="primary">
            Umidade Ideal:
          </Typography>
          {vases.map(data => (
            <ConfigButton
              key={data.name}
              title={data.name}
              value={data.value}
              incrementValue={incrementValueVases}
              decrementValue={decrementValueVases}
              sufix="%"
            />
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(styles)(ConfigView);
