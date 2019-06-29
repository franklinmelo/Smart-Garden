import React from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from './styles';
import theme from '../../Theme';

function MenuDrawer({ classes, open, handleDrawerClose }) {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{ backgroundColor: '#07b673' }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: 'black' }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink exact to="/" style={{ textDecoration: 'none' }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="DashBoard"
                primaryTypographyProps={{ className: classes.textMenu }}
              />
            </ListItem>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText
                primary="Hitorico"
                primaryTypographyProps={{ className: classes.textMenu }}
              />
            </ListItem>
          </NavLink>
          <NavLink to="/config" style={{ textDecoration: 'none' }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Configurações"
                primaryTypographyProps={{ className: classes.textMenu }}
              />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default withStyles(styles)(MenuDrawer);
