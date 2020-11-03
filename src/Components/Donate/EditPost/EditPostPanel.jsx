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
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import UserPostCard from './UserPostCard'
import DeliveryStatusCard from './DeliveryStatusCard'

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

export default function EditPostPanel(props) {
    const { posts } = props
    const { approvalposts } = props
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const user = localStorage.getItem('username')

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
                    <Tab label="My Posts" icon={<ViewAgendaIcon />} {...a11yProps(0)} />
                    <Tab label="Delivery Status" icon={<CheckCircleOutlineIcon />} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Box fontWeight='fontWeightMedium' display='inline'>My Posts<br />
                </Box>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    {posts && posts.filter(x => x.Username === user).map(x => {
                        return (<UserPostCard key={x.Postid} post={x} />)
                    })}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box fontWeight='fontWeightMedium' display='inline'>Delivery Status</Box>
                <Grid container direction="row" justify="space-around" alignItems="center">
                {approvalposts && approvalposts.map(x => {
                        return (<DeliveryStatusCard key={x.Postid} post={x} />)
                    })}
        </Grid>
            </TabPanel>
        </div>
    );
}
