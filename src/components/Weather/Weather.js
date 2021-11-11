import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fetchCity, fetchWeather } from '../../redux/actions/weatherAction';
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Weather() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weatherInfo.city);
  const weatherInfo = useSelector((state) => state.weatherInfo.weather);
  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch, city]);
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [dispatch, city]);
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='h2'>
          Weather Of The Day
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Country:{weatherInfo?.sys.country} ,City:{city} ,{weatherInfo?.clouds.all}% clouds
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {weatherInfo?.weather[0].main} : {weatherInfo?.weather[0].description}
        </Typography>
        <Typography variant='h5' component='h2'>
          Wind
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          speed:{weatherInfo?.wind.speed}%, Deg: {weatherInfo?.wind.deg}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Weather;
