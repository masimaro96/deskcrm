import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { blue, green, grey, orange, red, yellow} from '@mui/material/colors';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ViewHeader from '../view-header/component';
import ViewBody from '../view-body/component';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='topbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              color: grey[900]
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4} display='flex'>
                <Typography variant="h5" noWrap component="div" className='title-header'>
                  Customer Name
                </Typography>
                <HistoryIcon sx={{ fontSize: 25 }} className='history-icon'/>
                <SearchIcon sx={{ fontSize: 25 }} className='search-icon' />
              </Grid>
              <Grid item xs={6} md={8} fle sx={{'& > :not(style)': { m: 1.5, }, }} className='icon-right'>
                <Badge badgeContent={2} color="error">
                  <NotificationsNoneIcon color="action" />
                </Badge>
                <SettingsIcon color="action" />
                <HelpOutlineIcon color="action" />
                <Avatar sx={{ width: 24, height: 24 }} />
                <LogoutIcon color="action" />
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} PaperProps={{
              sx: {
                backgroundColor: "#343a40",
                color: "white"
              }
            }}>
        <DrawerHeader className='siderbar-open'>
          <Box sx={{ flexGrow: 1 }} className='siderbar-open-titlename'>
              <Typography variant="h5" noWrap component="div" className='siderbar-open-title'>
                  Hanbiro
              </Typography>
              <Typography variant="h9" noWrap component="div" className='siderbar-open-company'>
                  CRM
              </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose} className='siderbar-open-icon'>
              {theme.direction === 'rtl' ? <MenuIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard', 'My Work', 'Desk', 'Customer', 'Product', 'Demo Page', 'Favorites', 'My Works'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {index === 0 && <DashboardIcon sx={{ color: blue[900] }} />}
                    {index === 1 && <BusinessCenterIcon sx={{ color: red[400] }} />}
                    {index === 2 && <HeadsetMicIcon sx={{ color: orange[500] }} />}
                    {index === 3 && <PeopleOutlineIcon sx={{ color: blue[500] }} />}
                    {index === 4 && <InventoryIcon sx={{ color: green[400] }} />}
                    {index === 5 && <PersonalVideoIcon sx={{ color: grey[400] }} />}
                    {index === 6 && <StarOutlinedIcon sx={{ color: yellow[500] }} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1}}>
        <DrawerHeader />
        <ViewHeader />
        <Divider />
        <ViewBody />
      </Box>
    </Box>
  );
}