import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ApprovalOrder from './ApprovalOrder'

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

export default function ApprovalCard(props) {
  const { post } = props
  const { route } = props
  const classes = useStyles();

  if (!post.OrderConfirm) {
    return (
      <React.Fragment>
        <Grid item lg={3} className="grid-container">
          <Card key={post.Postid} className={classes.root}>
            <CardActionArea>
            <CardMedia key={post.Postid}
                    className={classes.media}
                    image={"data:image/jpeg;base64," + post.Itempic}
                    title={post.ItemName}
                  />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.ItemName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Request from: {post.req_username}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ApprovalOrder route={route} post={post.OrderId} />
            </CardActions>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
  else{
    return(
      <React.Fragment></React.Fragment>
    )
  }
}
