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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ReviewCard(props) {
  const { post } = props
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Card key={post.Postid} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.indianexpress.com/2020/08/iPhone-12-FBBBB.jpg"
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
            <Button size="small" color="primary">
              Buy
          </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
