import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './style';
import MenuDrawer from '../drawer/MenuDrawer';
import { isAuthenticated, logout } from 'services/auth';

const SignInLink = React.forwardRef((props, ref) => (
  <Link to="/entrar" innerRef={ref} {...props} />
));

function AppBarView({ classes, history }) {
  const [open, setOpen] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const onLogout = () => {
    logout();
    history.push('/entrar');
  };

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
              Smart Garden
            </Link>
          </Typography>
          {isAuthenticated() ? (
            <Button onClick={onLogout} color="inherit">
              Sair
            </Button>
          ) : (
            <Button component={SignInLink} color="inherit">
              Entrar
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
}
export default withStyles(styles)(withRouter(AppBarView));
