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
  card:{
    paddingBottom: 10,
    minHeight:370,
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
      image: "https://www.ikea.com/sg/en/images/products/flisat-childrens-stool__0727952_PE735964_S5.JPG",
      title: "Stool",
      text: "Used, Condition: 8/10",
    },
    {
      image:"https://images-na.ssl-images-amazon.com/images/I/91Oy8v4fcxL._AC_SL1500_.jpg",
      title: "Bedside table",
      text: "Used, Condition: 7/10",
    },
    {
      image: "https://pyxis.nymag.com/v1/imgs/de6/c3e/919b5ae4a4442ce6416b341e47f7cbdb51.rdeep-vertical.w245.jpg",
      title: "Small bedtime lamp",
      text: "Used, Condition: White frame has turned slightly yellow",
    },
    {
      image: "https://www.ikea.com/sg/en/images/products/tjusig-shoe-rack-black__0710715_PE727750_S5.JPG?f=xs",
      title: "Shoe rack",
      text: "Used, fits 12 pairs of shoes",
    },
    
  ];

  return (
    <div>
     <Grid container direction="row" justify="center" alignItems="center">
      {cardInfo && cardInfo.map(x => {
        return (
          <div className={classes.root}>
           <Grid item xs={10} className={classes.card}>
            <Card className={classes.card} >
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
