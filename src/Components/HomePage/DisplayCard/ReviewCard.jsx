import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardModal from './Modal/CardModal';
import { Link } from 'react-router-dom'
import './ReviewCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    minWidth: 245,
  },
  media: {
    height: 250,
    minWidth: 245,
  },
});

export default function ReviewCard(props) {
  const { post } = props
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item lg={3} className="grid-container">
        <Card key={post.Postid} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={"data:image/jpeg;base64," + post.ImageId}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.ItemName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Posted on: {post.PostDate} By: {post.Username}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CardModal post={post} />
            <Link className="removeHyperlink" to={ "placeOrder/" + post.Postid }>
              <Button size="small" color="primary">
                Get
          </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
