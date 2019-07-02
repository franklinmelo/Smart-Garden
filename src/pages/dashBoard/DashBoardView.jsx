import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PieChart from 'react-minimal-pie-chart';
import api from '../../services/api';
import styles from './styles';

function DashBoardView({ classes }) {
  const [vases, setVases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVases = async () => {
      const { data } = await api.get('/vasos');

      const newVases = data.map(item => ({
        ...item,
        isLoading: false
      }));

      setVases(newVases);
      setIsLoading(false);
    };

    getVases();
  }, []);

  console.log(vases);

  async function irrigar(id) {
    const vase = vases.find(item => item.id === id);

    setVases(
      vases.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isLoading: true
          };
        }

        return item;
      })
    );

    let isIrrigating;
    if (vase.pin[1].value === 1) {
      isIrrigating = 0;
    } else {
      isIrrigating = 1;
    }

    const data = {
      pin: vase.pin[1].name,
      value: isIrrigating
    };

    await api.post('/irrigate', data);

    const newVases = vases.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isLoading: false,
          pin: vase.pin.map(item => {
            if (item.name === vase.pin[1].name) {
              return {
                ...item,
                value: isIrrigating
              };
            }
            return item;
          })
        };
      }
      return item;
    });

    setVases(newVases);
  }

  if (isLoading) {
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: '100vh' }}
      >
        <CircularProgress />
      </Grid>
    );
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
                <div className={classes.wrapper}>
                  <Button
                    onClick={() => irrigar(data.id)}
                    size="large"
                    color="primary"
                    variant={data.pin[1].value === 1 ? 'contained' : 'outlined'}
                    disabled={data.isLoading}
                  >
                    {data.pin[1].value === 1 ? 'Irrigando' : 'IRRIGAR'}
                  </Button>
                  {data.isLoading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default withStyles(styles)(DashBoardView);
