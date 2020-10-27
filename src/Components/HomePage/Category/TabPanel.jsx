import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//importing icons for categories
import MensIcon from '@material-ui/icons/Face';
import WomensIcon from '@material-ui/icons/Accessibility';
import FurnitureIcon from '@material-ui/icons/Apartment';
import HealthIcon from '@material-ui/icons/AddCircleOutline';
import Homeproducticon from '@material-ui/icons/HotTub';
import Foodicon from '@material-ui/icons/Cake';
import Stationeryicon from '@material-ui/icons/Create';
import Electronicsicon from '@material-ui/icons/Tv';

import ReviewCard from '../DisplayCard/ReviewCard'


function TabPanel(props) {
  const { children, value, index, donationposts, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CategoryTab(props) {
  const { donationposts } = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Women's Fashion" icon={<WomensIcon />} {...a11yProps(0)} />
          <Tab label="Men's Fashion" icon={<MensIcon />} {...a11yProps(1)} />
          <Tab label="Furniture" icon={<FurnitureIcon />} {...a11yProps(2)} />
          <Tab label="Health and beauty" icon={<HealthIcon />} {...a11yProps(3)} />
          <Tab label="Home products" icon={<Homeproducticon />} {...a11yProps(4)} />
          <Tab label="Food products" icon={<Foodicon />} {...a11yProps(5)} />
          <Tab label="Electronics" icon={<Electronicsicon />} {...a11yProps(6)} />
          <Tab label="Stationery" icon={<Stationeryicon />} {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box fontWeight='fontWeightMedium' display='inline'>Women's fashion</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.filter(x => x.Category === "Iphone").map(x => {
            return(<ReviewCard post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box fontWeight='fontWeightMedium' display='inline'>Men's fashion</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box fontWeight='fontWeightMedium' display='inline'>Furniture</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box fontWeight='fontWeightMedium' display='inline'>Health and beauty</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box fontWeight='fontWeightMedium' display='inline'>Home products</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box fontWeight='fontWeightMedium' display='inline'>Food products</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box fontWeight='fontWeightMedium' display='inline'>Electronics</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box fontWeight='fontWeightMedium' display='inline'>Stationery</Box>
        <Grid container direction="row" justify="space-around" alignItems="center">
          {donationposts && donationposts.map(x => {
            return(<ReviewCard categoryid={0} post={x} />)
          })}
        </Grid>
      </TabPanel>
    </div>
  );
}
