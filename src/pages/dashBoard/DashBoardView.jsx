import React, { useState } from 'react';
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
  const [value, setValue] = useState(0);
  const vasos = [
    { nome: 'VASO 1', valor: value, color: '#1ff8a6' },
    { nome: 'VASO 2', valor: 15, color: '#515a9d' },
    { nome: 'VASO 3', valor: 34, color: '#00a0c8' },
    { nome: 'VASO 4', valor: 80, color: '#E38627' }
  ];

  function irrigar(nome) {
    if (nome === 'VASO 1') {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-around"
        className={classes.body}
      >
        {vasos.map(data => (
          <Grid item key={data.nome}>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.nome}
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
                    onClick={e => irrigar(data.nome)}
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
