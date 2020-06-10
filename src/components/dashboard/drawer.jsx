import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import keep from '../../assets/keep_logo.png'
import { fade} from '@material-ui/core/styles';
import { withStyles, AppBar,Drawer, ListItemIcon,List,ListItem,ListItemText, CssBaseline, Tooltip,Avatar} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Refresh from '@material-ui/icons/Refresh'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Delete from '@material-ui/icons/Delete';
import Alarm  from '@material-ui/icons/Alarm';
import Notes from '@material-ui/icons/Notes';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Grid from '@material-ui/icons/Apps'
import ListIcon from '@material-ui/icons/List'
import users from '../../services/user'
const service = new users()
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
    },
    },
    avatar: {
        margin: 10,
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    
    grow: {
        flexGrow: 1,
    },

    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9 + 1,
        },
    },
    
    tools: {
        marginTop: "9px",
        marginBottom:"9px",
       
      },
});

class Navbar extends React.Component{
    constructor(){
        super()
        this.state = {
            anchorEl: null,
            open:false,
            view :false
        };
    }

    handleDrawerOpen = () => {
    this.setState({ open: true });
    };

    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
    };

    changeView = (event, viewType)=>{
      this.setState({typeOfNote:viewType})
    }

    handleLogOut() {
      
      service.logOut()
      .then((response)=>{
        console.log(response)
          this.props.history.push("/")
       })
       .catch(error=>{
        console.log(error)
      }) 
    }

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    handleViewClick=()=> {
        this.setState({view: !this.state.view});
    }
    handleRefresh=()=>{
        window.location.reload();
    }

    render() {
        const { classes, theme } = this.props;
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
            </Menu>
        );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {[classes.appBarShift]: this.state.open,})}>
        <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
            <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={keep} alt="Logo" /> 
            <Typography variant="h6" color="inherit" noWrap>
                FundooNote
            </Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                        <InputBase placeholder="Search…" classes={{root: classes.inputRoot,input: classes.inputInput,}}/>
                    </div>
                    <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Tooltip title="Refresh" className={classes.tools}>
                            <IconButton color="inherit" onClick={this.handleRefresh} className={classes.large}>
                                <Refresh/>
                            </IconButton>
                            </Tooltip>
                            <div className={classes.tools}>
                                <Tooltip title={this.state.view ? "Grid View" : "List View"}>
                                    <IconButton 
                                    color="inherit" 
                                    onClick={this.handleViewClick} 
                                    aria-label="List/Grid"
                                    >
                                    {this.state.view ? <Grid/> : <ListIcon/> }
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <Tooltip title="Notification">
                            <IconButton color="inherit">
                                <NotificationsIcon/>
                            </IconButton>
                            </Tooltip>

                           <IconButton
                                
                                aria-label="account user"
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                onClick={this.handleProfileMenuOpen}
                                color="inherit">
                                <Avatar alt="Remy Sharp" src={require('../../assets/jobs.jpeg')} className={classes.large} />
                            </IconButton>
                        </div>
            </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}>
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button key='Notes' onClick={(event)=>{this.changeView(event, 'Keep')}}>
            <ListItemIcon><Notes/></ListItemIcon>
            <ListItemText>Notes</ListItemText>
            </ListItem>
            <ListItem button key='Reminder'>
            <ListItemIcon><Alarm/></ListItemIcon>
            <ListItemText>Reminder</ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            
        <ListItem button key='Archive' onClick={(event)=>{this.changeView(event, 'Archive')}}>
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText>Archive</ListItemText>  
            </ListItem>
        <ListItem button key='Delete' onClick={(event)=>{this.changeView(event, 'Trash')}}>
            <ListItemIcon><Delete/></ListItemIcon>
            <ListItemText>Trash</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default ((withStyles(styles, { withTheme: true })(Navbar)))