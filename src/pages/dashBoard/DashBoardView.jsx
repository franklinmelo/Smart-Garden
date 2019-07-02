import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import PieChart from 'react-minimal-pie-chart';
import api from '../../service/api';
import styles from './styles';

function DashBoardView({ classes }) {
  const [vases, setVases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVases = async () => {
      const { data } = await api.get('/vasos');

      setVases(data);
      setIsLoading(false);
    };

    getVases();
  }, []);

  async function irrigar(pin) {
    const data = {
      pin: pin.name,
      value: 1
    };

    await api.post('/irrigate', data);
  }

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Grid container justify="space-around" className={classes.body}>
      {vases.map(data => (
        <Grid item key={data.id}>
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
            </CardContent>
            <CardContent>
              <PieChart //lib de graficos pizza
                data={[
                  {
                    title: data.name,
                    value: data.pin[0].value,
                    color: data.color
                  }
                ]} //lista de objetos para serem exibidos no grafico
                lineWidth={13} //grossura da linha
                startAngle={120} //angulo em que começa o grafico
                lengthAngle={300} //tamanho da circunferencia do grafico
                totalValue={100} //valor maximo a ser preenchido no grafico
                background="#282c34"
                rounded //deixa no formato de dount
                label //habilita exibir o valor no meio
                labelPosition={0} //angulo da posição da label
              />
            </CardContent>

            <CardActions>
              <Grid container justify="center">
                <Button
                  onClick={e => irrigar(data.pin[1])}
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
  );
}

export default withStyles(styles)(DashBoardView);
