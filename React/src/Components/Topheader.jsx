import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import BillingTable from "./BillingTable";

import {signincheck} from "./signincheck"

// import Tables from "./table"


import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(e) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(e.signin);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Previous Bill" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Billing Table" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Page Three" href="/" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
         no bill now
      </TabPanel>

      <TabPanel value={value} index={1}>
        <BillingTable>  </BillingTable>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <Button onClick={e.signout }       variant="contained" color="secondary"  >  signout  </Button>
      </TabPanel>
    


    </div>
  );
}