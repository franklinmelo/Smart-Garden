import React, { useState, useEffect } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PieChart from 'react-minimal-pie-chart';
import theme from '../../Theme';
import styles from './styles';

function DashBoardView({ classes }) {
  const [vases, setVases] = useState([]);
  const vasos = [
    { name: 'VASO 1', valor: 0, color: '#1ff8a6' },
    { name: 'VASO 2', valor: 15, color: '#515a9d' },
    { name: 'VASO 3', valor: 34, color: '#00a0c8' },
    { name: 'VASO 4', valor: 80, color: '#E38627' }
  ];

  useEffect(() => {
    if (vases.length === 0) setVases(vasos);
  }, [vases, vasos]);

  function irrigar(name) {
    const mock = vases.map(data => {
      if (data.name === name) {
        return { ...data, valor: data.valor + 1 };
      } else {
        return data;
      }
    });
    setVases(mock);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-around"
        className={classes.body}
      >
        {vases.map(data => (
          <Grid item key={data.name}>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}
                </Typography>
              </CardContent>
              <CardContent>
                <PieChart //lib de graficos pizza
                  data={[
                    { title: 'One', value: data.valor, color: data.color }
                  ]} //lista de objetos para serem exibidos no grafico
                  lineWidth={13} //grossura da linha
                  startAngle={120} //angulo em que começa o grafico
                  lengthAngle={300} //tamanho da circunferencia do grafico
                  totalValue={100} //valor maximo do grafico
                  background="#282c34"
                  rounded //deixa no formato de dount
                  label //habilita exibir o valor no meio
                  labelPosition={0} //angulo da posição da label
                />
              </CardContent>

              <CardActions>
                <Grid container direction="row" justify="center">
                  <Button
                    onClick={e => irrigar(data.name)}
                    size="large"
                    color="primary"
                    variant="outlined"
                  >
                    IRRIGAR
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(styles)(DashBoardView);
