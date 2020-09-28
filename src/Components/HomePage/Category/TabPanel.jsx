import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 800,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<PhoneIcon />} label="Women Fashion" />
        <Tab icon={<FavoriteIcon />} label="Men Fashion" />
        <Tab icon={<PersonPinIcon />} label="Furniture" />
        <Tab icon={<ThumbUp />} label="Health and Beauty" />
        <Tab icon={<ThumbDown />} label="Music" />
      </Tabs>
    </Paper>
  );
}
