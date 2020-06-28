/***************************************************************
 * @purpose  : Define Side bar
 * @file     : drawer.jsx             
 * @overview : Componet To Handle Dashboard
 * @author   : priti shinde
 * @since    : 8/6/2020
***************************************************************/
import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import keep from '../../assets/keep_logo.png'
import { fade} from '@material-ui/core/styles';
import {Dialog, DialogTitle,DialogActions,DialogContent,TextField} from '@material-ui/core';
import { withStyles, AppBar,Drawer, ListItemIcon,List,ListItem,ListItemText, CssBaseline, Tooltip,Avatar,Button} from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close'
import DoneIcon from "@material-ui/icons/Done";
import Refresh from '@material-ui/icons/Refresh'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import Delete from '@material-ui/icons/Delete';
import Alarm  from '@material-ui/icons/Alarm';
import Notes from '@material-ui/icons/Notes';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Grid from '@material-ui/icons/Apps'
import ListIcon from '@material-ui/icons/List'
import users from '../../services/user'
import  Displaynote from '../note/displaynote';
import Label from '@material-ui/icons/Label'
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import labels from '../../services/label';
const userService = new users()
const labelService = new labels()

const styles = theme => ({
  root: {
    display: 'flex',
   
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      backgroundColor: "#fb0;" ,
      
    }),
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
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
        
    },
    color:"#000000"
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
        color:"#000000"
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
        width: '200px',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: '200px',
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
        width: theme.spacing.unit * 6 + 1,
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 8 + 1,
        },
    },
    
    tools: {
        marginTop: "9px",
        marginBottom:"9px",
       
      },
    color:{
        backgroundColor:"white"
      },

      multilineColor:{
        color:'#000000'
    },
    profile:{
      display:'flex',
      flexDirection:'row'      
    },
    logout:{
      float:"right",
      marginBottom:"2%",
      marginTop:"1%"
    }
    
});
  
class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active:false,
            anchorEl: null,
            open:false,
            view: false,
            typeOfNote:'FundooNote',
            logOut:false,
            labelList:[],
            activeLabel:null,
            newLabel:"",
        };
        
    }

    componentDidMount() {
      this.getNoteLabel() 
            
    }
    
    getNoteLabel=()=>{
      let token =localStorage.getItem('token');
      labelService.getNoteLabelList(token)
        .then(data => {
            console.log(data)
            this.setState({
              labelList: data.data.data.details
              })
          })
          .catch(error => {
              console.log(error);
          })
     }

    onSubmitView=()=>{
      this.setState({view:!this.state.view})
  }
    
    handleDrawerOpen = () => {
    this.setState({ open: true });
    };
    
    handleDialogOpen = () => {
      this.setState({ active: true });
      };

    handleDialogClose = () => {
      this.setState({ active: false });
      };

    handleToggle = () => {
      this.setState(state => ({ open: !state.open }));
    };

    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
    };

    handleChange=(event)=>{
      this.setState({[event.target.name]: event.target.value});
  }

    changeView = (event, viewType)=>{
      event.preventDefault();
      this.setState({typeOfNote:viewType,activeLabel:null});
    }

    changeLabelView = (event, label)=>{
      event.preventDefault();
      this.setState({typeOfNote:'label',activeLabel:label.label});
    }

    logout = () => {
      this.setState({logout: true});
      localStorage.clear();
    }
  

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };
   
    // handleRefresh=()=>{
    //     window.location.reload();
    // }

    addNoteLabel=()=>{
      let userId = localStorage.getItem('userId');
      let labelData = {
          userId: userId,
          isDeleted:false,
          label:this.state.newLabel
      }
      labelService.addNoteLabel(labelData)
          .then(res=>{
             this.getNoteLabel()
             this.setState({newLabel:""});
                             
           })
          .catch(err => {
             console.log(err.response);
          });
      }

      updateNoteLabel = (label)=>{
        console.log(this.state[label.id]);
        console.log(label);

        labelService.updateNoteLabel(label.id,this.state[label.id])
        .then(data => {
          console.log(data)
          this.getNoteLabel();
        })
        .catch(error => {
            console.log(error);
        })
      }

      deleteNoteLabel = (label)=>{
        console.log(this.state[label.id]);
        labelService.deleteNoteLabel(label.id)
        .then(data => {
          console.log(data)
          this.getNoteLabel();
        })
        .catch(error => {
            console.log(error);
        })
      }

    render() {
      if (this.state.logout === true)
      return <Redirect to="/login" push={true}></Redirect>
      let firstName =localStorage.getItem('firstName');
      let lastName =localStorage.getItem('lastName');
      let email = localStorage.getItem('email');
      let image = localStorage.getItem('image');
      const { classes, theme } = this.props;
      const { anchorEl } = this.state;
      const isMenuOpen = Boolean(anchorEl);

        const renderMenu = (
          <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuClose}
              style={{top:"51px"}}
              
          >
            <MenuItem>
              <div className={classes.profile}>
                <div>
                  <Avatar alt="Remy Sharp" src={image} />
                </div>
                <div>
                  <Typography variant="body1">{  firstName+" " +lastName}</Typography>
                  <Typography variant="body2">{email}</Typography>
                </div>
              </div>
            </MenuItem>
            <Divider/>
            <Button variant="outlined" size="small" className={classes.logout}  onClick={this.logout} >Logout</Button>
          </Menu>
        );
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
           className={classNames(classes.appBar,classes.color, {[classes.appBarShift]: this.state.open,})}>
        <Toolbar >
            <IconButton className={classes.multilineColor}
             onClick={this.handleToggle}
              aria-label="Open drawer">
            <MenuIcon />
            </IconButton>
            <img className={classes.logo} id='logo' src={keep} alt="Logo" /> 
            <Typography variant="h6" className={classes.multilineColor}>
                {this.state.typeOfNote}
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
                            <IconButton onClick={this.handleRefresh} className={classes.large,classes.multilineColor}>
                                <Refresh/>
                            </IconButton>
                            </Tooltip>
                            <div className={classes.tools}>
                                <Tooltip title={this.state.view ? "Grid View" : "List View"}>
                                    <IconButton 
                                    className={classes.multilineColor}
                                    onClick={this.onSubmitView} 
                                    aria-label="List/Grid"
                                    >
                                    {this.state.view ? <Grid/> : <ListIcon/> }
                                    </IconButton>
                                </Tooltip>
                            </div>
                           <IconButton
                                className={classes.multilineColor}
                                aria-label="account user"
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                onClick={this.handleProfileMenuOpen}>
                                <Avatar alt="Remy Sharp" src={image} className={classes.large} />
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
          <div className={classes.toolbar}/>
          <Divider />
          <List>
            <ListItem button key='Notes' onClick={(event)=>{this.changeView(event, 'Keep')}}>
              <ListItemIcon><Notes/></ListItemIcon>
              <ListItemText>Notes</ListItemText>
            </ListItem>
            <ListItem button key='Reminder' onClick={(event)=>{this.changeView(event, 'Reminder')}}>
              <ListItemIcon><Alarm/></ListItemIcon>
              <ListItemText>Reminder</ListItemText>
            </ListItem>
          </List>
          <Divider/>
          <List>
            <ListItem style={{display:"flex",justifyContent:"space-between"}}>
                <span>Label</span>
                <div>
                <div>
                  <Button onClick={this.handleDialogOpen} >Edit</Button>
                </div>
                <div>
                    <Dialog  open={this.state.active} onClose={this.handleDialogClose}>
                        <DialogTitle>Edit Labels</DialogTitle>
                        <DialogContent>
                            <div style={{display:"flex"}}>
                                <div>
                                    <IconButton><Close/></IconButton>
                                </div>
                                <div style={{display:"flex" ,float:"right"}} >
                                        <TextField disabledid="standard-disabled" placeholder="Create new label"
                                        name="newLabel"  onChange={this.handleChange} value={this.state.newLabel} fullWidth  />
                                </div>
                                   <div>
                                       <IconButton onClick={this.addNoteLabel}><DoneIcon/></IconButton>
                                   </div>
                            </div>
                            {this.state.labelList.map((value,index)=>(
                              <div key={value.id} style={{display:"flex"}}>
                                <div>
                                    <Label/>
                                </div>
                                <div style={{display:"flex" ,float:"right"}} >
                                        <TextField name={value.id} onChange={this.handleChange} defaultValue={value.label} fullWidth  />
                                </div>
                                  <div>
                                      <IconButton onClick={this.updateNoteLabel.bind(this,value)}><DoneIcon/></IconButton>
                                  </div>
                                  <div>
                                      <IconButton onClick={this.deleteNoteLabel.bind(this,value)}><DeleteForeverIcon color="secondary" /></IconButton>
                                  </div>
                            </div>
                            ))}

                          </DialogContent>
                        <div>
                          <DialogActions>
                              <Button onClick={this.handleDialogClose} >Done </Button>
                          </DialogActions>
                        </div>
                    </Dialog>
                </div>
              </div>
            </ListItem>
            {this.state.labelList.map((value,index)=>(
              <ListItem button key={value.id} onClick={(event)=>{this.changeLabelView(event, value)}}>
                <ListItemIcon><Label/></ListItemIcon>
                <ListItemText>{value.label}</ListItemText>
              </ListItem>
            ))}
          </List>
          <List>  
         <Divider/>
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
        
       
        <main className={classes.content}>
          <div className={classes.toolar}/>
          <Displaynote  typeOfNote={this.state.typeOfNote}  getNoteLabel={this.getNoteLabel} label={this.state.activeLabel}/>
        </main>       
        
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default ((withStyles(styles, { withTheme: true })(Navbar)))