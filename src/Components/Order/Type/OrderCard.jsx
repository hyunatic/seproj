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
import DeleteOrder from './DeleteOrder';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function OrderCard(props) {
  const { post } = props
  const { donationposts } = props
  const classes = useStyles();

  if (post.OrderConfirm) {
    return (
      <React.Fragment>
        <Grid item xs={3} className="grid-container">
          <Card key={post.Postid} className={classes.root}>
            <CardActionArea>
              {donationposts.filter(x => x.Postid === post.Postid).map(x => {
                return (
                  <CardMedia key={x.Postid}
                    className={classes.media}
                    image={"data:image/jpeg;base64," + x.ImageId}
                    title={x.ItemName}
                  />
                )
              })}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.ItemName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Collection Point: {post.Location}
                  <br />
                  Order Confirmation: Confirmed
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <DeleteOrder orderid={post.Postid} />
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <Grid item xs={4} className="grid-container">
          <Card key={post.Postid} className={classes.root}>
            <CardActionArea>
              {donationposts.filter(x => x.Postid === post.Postid).map(x => {
                return (
                  <CardMedia key={x.Postid}
                    className={classes.media}
                    image={"data:image/jpeg;base64," + x.ImageId}
                    title={x.ItemName}
                  />
                )
              })}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.ItemName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Collection Point: {post.Location} {post.OrderId}
                  <br />
                  Order Confirmation: Pending 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DeleteOrder orderid={post.OrderId} />
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}
