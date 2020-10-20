import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 5
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function ReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const cardInfo = [
    {
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/da363cc138f945b19850a80e010fa6e2_9366/Adilette_Comfort_Slides_Black_AP9966_01_standard.jpg",
      title: "Adidas Sliders",
      text: "Used, Condition: 6/10, Previously used for shower",
    },
    {
      image:"https://cache.net-a-porter.com/images/products/1212990/1212990_fr_2000_q80.jpg",
      title: "Gold Frame Lenless spectacles",
      text: "New",
    },
    {
      image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/45dcf42f193040e88c2aaa8d00e01770_9366/4ATHLTS_Duffel_Bag_Small_Black_FJ9353_01_standard.jpg",
      title: "Duffel bag suited for daily use",
      text: "Used, Condition: 7/10, can be used as a gym bag",
    },
    {
      image: "https://d15udtvdbbfasl.cloudfront.net/catalog/product/large_image/63_172047.jpg",
      title: "Denim Shorts",
      text: "Pre-loved item, Size 36",
    },
    
  ];

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
      {cardInfo && cardInfo.map(x => {
        return (
          <div>
            <Grid item xs={10}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
          </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={x.title}
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={x.image}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {x.text}
        </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
          </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
          </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
              </Collapse>
            </Card>
            </Grid>
          </div>
        )
      })}
      </Grid>
    </div>
  );
}
