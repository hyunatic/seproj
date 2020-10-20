import React,{ Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from '../DateTimePage/datetimepage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'

  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default class RegisterForm extends Component {
  render(){
    useStyles();
    return (
      <div className={useStyles.root}>
        <Grid container>
          <Grid xs={12}>
            <PrimarySearchAppBar />              
          </Grid>                               
        </Grid>
        <Paper className={useStyles.paper}>
          <Grid container spacing={2} >
            <Grid item>
              <ButtonBase className={useStyles.image}>
                <img className={useStyles.img} alt="baygon" src="https://cdn11.bigcommerce.com/s-knrdocushe/images/stencil/1280x1280/products/11931/21552/4801234108038__24180.1573635984.jpg?c=2" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant='overline'>
                      Johnsmith
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                      Baygon multi insect killer
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                      Used, at least half bottle left
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="datetime">
                    10 minutes ago in  &nbsp;  
                    <Link classname="hyperlinktoHP" to="/home"> 
                    Home Products
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                  <Link to="/datetimepage"><Button variant="outline-danger" size="small" >
                      Request
                  </Button>
                  </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
