import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//importing icons for categories
import MensIcon from '@material-ui/icons/Face';
import WomensIcon from '@material-ui/icons/Accessibility';
import FurnitureIcon from '@material-ui/icons/Apartment';
import HealthIcon from '@material-ui/icons/AddCircleOutline';
import Homeproducticon from '@material-ui/icons/HotTub';
import Foodicon from '@material-ui/icons/Cake';
import Stationeryicon from '@material-ui/icons/Create';
import Electronicsicon from '@material-ui/icons/Tv'; 
//importing cards for each category
import ReviewCardHealth from '../DisplayCard/ReviewCardHealth';
import ReviewCardWF from '../DisplayCard/ReviewCardWF';
import ReviewCardMF from '../DisplayCard/ReviewCardMF';
import ReviewCardF from '../DisplayCard/ReviewCardF';
import ReviewCardHP from '../DisplayCard/ReviewCardHP';
import ReviewCardFP from '../DisplayCard/ReviewCardFP';
import ReviewCardE from '../DisplayCard/ReviewCardE';
import ReviewCardS from '../DisplayCard/ReviewCardS';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function ScrollableTabsButtonForce() {
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
        <ReviewCardWF/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box fontWeight='fontWeightMedium' display='inline'>Men's fashion</Box>
        <ReviewCardMF/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box fontWeight='fontWeightMedium' display='inline'>Furniture</Box>
        <ReviewCardF/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box fontWeight='fontWeightMedium' display='inline'>Health and beauty</Box>
        <ReviewCardHealth/>
      </TabPanel>
      <TabPanel value={value} index={4}>     
      <Box fontWeight='fontWeightMedium' display='inline'>Home products</Box>
        <ReviewCardHP/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Box fontWeight='fontWeightMedium' display='inline'>Food products</Box>
        <ReviewCardFP/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Box fontWeight='fontWeightMedium' display='inline'>Electronics</Box>
        <ReviewCardE/>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Box fontWeight='fontWeightMedium' display='inline'>Stationery</Box>
        <ReviewCardS/>
      </TabPanel>
    </div>
  );
}
