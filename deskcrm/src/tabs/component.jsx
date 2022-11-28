import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import { Chip, Divider, MenuItem, Popover } from '@mui/material';
import CustomizedTimeline from '../timeline/component';
import CustomizedSteppers from '../stepper/component';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    setValue(menuItem);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Instruction" {...a11yProps(0)} />
          <Tab label="Timeline" {...a11yProps(1)} />
          <Tab aria-describedby={id} onClick={handleClick} icon={<AddIcon />} iconPosition="start" label="More" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack direction="column" spacing={3}>
        <CustomizedSteppers />
          <Box borderRadius={2} sx={{ flexGrow: 1, p: 2, border: '1px solid grey' }}>
              <Box display='flex' sx={{ flexGrow: 1}}>
                  <Stack direction="row" spacing={2}>
                      <Typography noWrap component="div" className=''>
                          Direction:
                      </Typography>
                      <Typography noWrap component="div" className=''>
                          Outgoing
                      </Typography>
                  </Stack>
              </Box>
              <Box display='flex' sx={{ flexGrow: 1, pt: 1}}>
                  <Stack direction="row" spacing={2}>
                      <Typography noWrap component="div" className=''>
                          From:
                      </Typography>
                      <Avatar sx={{ width: 30, height: 30}}/>
                      <Typography noWrap component="div" className=''>
                          MSM
                      </Typography>
                  </Stack>
              </Box>
              <Box display='flex' sx={{ flexGrow: 1, pt: 1, pb: 3}}>
                  <Stack direction="row" spacing={2}>
                      <Typography noWrap component="div" className=''>
                          To:
                      </Typography>
                      <Avatar sx={{ width: 30, height: 30}}/>
                      <Typography noWrap component="div" className=''>
                          Allan Rey Palban
                      </Typography>
                  </Stack>
              </Box>
              <Box borderRadius={2} sx={{ flexGrow: 1, p: 1 , border: '1px solid black' }}>
                  <Typography noWrap component="div" className=''>
                      Content
                  </Typography>
              </Box>
          </Box>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack direction="column" spacing={3}>
          <Divider>
              <Chip color="secondary" label="2021-03-17"/>
          </Divider>
          <CustomizedTimeline />
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <MenuList>
            <MenuItem onClick={handleMenuItemClick} sx={{ p: 2 }}>Note</MenuItem>
            <MenuItem sx={{ p: 2 }}>Team Channel</MenuItem>
          </MenuList>
          
          {/* <Tabs value={value} onChange={handleChange} orientation="vertical">
            <Tab label="Item Five" {...a11yProps(4)} />
            <Tab label="Item Six" {...a11yProps(5)} />
          </Tabs>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel> */}
        </Popover>
      </TabPanel>
      
    </Box>
  );
}