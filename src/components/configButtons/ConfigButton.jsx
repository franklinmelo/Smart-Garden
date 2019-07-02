import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

function ConfigButton({
  classes,
  title,
  value,
  sufix,
  incrementValue,
  decrementValue
}) {
  return (
    <Grid
      item
      container
      direction="row"
      justify="center"
      className={classes.marginVertical}
    >
      <Grid item xs={4} sm={2} container alignItems="center" justify="center">
        <Typography variant="button" color="primary">
          {title}:
        </Typography>
      </Grid>
      <Grid
        item
        xs={7}
        sm={3}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{
          borderRadius: '5px',
          backgroundColor: '#6d6e70'
        }}
      >
        <Grid item xs={4}>
          <Button
            color="primary"
            style={{ width: '100%' }}
            onClick={e => decrementValue(title)}
          >
            <RemoveIcon />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {value} <Typography variant="caption">{sufix}</Typography>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="primary"
            style={{ width: '100%' }}
            name="teste"
            onClick={e => incrementValue(title)}
          >
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(ConfigButton);
