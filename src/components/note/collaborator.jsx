import collaborator from '../../assets/collaborator.svg'
import React from 'react'
import { Tooltip,IconButton,DialogTitle,Divider,Dialog,Menu,MenuItem,Snackbar} from '@material-ui/core'
import { List,ListItem,ListItemIcon,Avatar,ListItemText,ListItemAvatar,TextField,DialogActions,Button} from '@material-ui/core';
import PersonIcon from "@material-ui/icons/Person";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import "../../scss/note.scss"
import notes from '../../services/note'
const service = new notes()
const ITEM_HEIGHT = 48;

class Collaborator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            list:[],
            searchValue:'',
            anchorEl: null,
            active:false ,
            userList:[],
            snackbaropen:false,
            snackbarmsg:"",
        }
    }
    handelMenuOpen=()=>{
        this.setState({open:true})
    }
    handleClose = () => {
        this.setState({ open: false });
    };

    handleSearchListOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget});
    }
    handleSearchListTargetOpen = (target) => {
        this.setState({ anchorEl: target});
    }


    handleSearchListClose  = () => {
        this.setState({ anchorEl: null });
    };
    snackbarClose = ()=>{
        this.setState({snackbaropen:false})
    }
    
    addCollborator=(userData)=>{
      if(this.props.value){
        for(let i=0;i<this.state.list;i++){
          if(userData.email == this.state.list[i].email){
           
            return;
          } 
        }
      
      let id = this.props.value.id
      service.addCollaborator(id,userData)
          .then(res=>{ 
            this.state.list.push(userData)
            this.handleSearchListClose()
        })
        .catch(err => {
            console.log(err.response); 
        });
      }else{
        this.state.list.push(userData)
      }
    }
      
    handleChange=(event)=>{
        let evCurrentTarget = event.currentTarget;

        this.setState({[event.target.name]: event.target.value});
        let searchData = {
            searchWord:event.target.value
        }
        let token =localStorage.getItem('token');
        service.searchUserList(token,searchData)
            .then(res=>{ 
                this.state.userList=[];
                this.state.userList=res.data.data.details;
                if(this.state.userList && this.state.userList.length > 0)
                    this.handleSearchListTargetOpen(evCurrentTarget);
            })
            .catch(err => {
                console.log(err.response); 
            });
    }
    render(){
        let firstName =localStorage.getItem('firstName');
        let lastName =localStorage.getItem('lastName');
        let email = localStorage.getItem('email');
        let image = localStorage.getItem('image');
        const { anchorEl } = this.state;
        return(
            <div>
             <div>
                <Tooltip title="collaborator">
                    <IconButton>
                        <img  src={collaborator} alt="colla" onClose={this.handleClose}  onClick={this.handelMenuOpen}/>
                    </IconButton>
                </Tooltip>
            </div>
            <div  className="collcontainer">
                <Dialog  open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Collaborator</DialogTitle>
                <Divider/>
                <List>
                    <ListItem>
                        <ListItemIcon><Avatar alt="Remy Sharp" src={image} /></ListItemIcon>
                       <div>
                        <ListItemText>
                                <b>{firstName+" " +lastName}</b> (owner)
                            </ListItemText>    
                            <ListItemText>
                                <b>{email}</b>
                            </ListItemText>
                        </div>
                    </ListItem>
                <div>
                  {this.state.list.map((item, index) => (
                    <ListItem button key={index}>
                      <ListItemAvatar>
                        {item.imageUrl > 0 ? (
                          <IconButton edge="end" aria-label="account of current user" aria-haspopup="true"
                            color="inherit">
                            <Avatar src={item.imageUrl} alt="profilepicture" ></Avatar>
                          </IconButton>
                        ) : (
                          <IconButton>
                            <Avatar> <PersonIcon /> </Avatar>
                          </IconButton>
                        )}
                      </ListItemAvatar> 
                      <ListItemText> {item.email} </ListItemText>
                      <IconButton >
                        <ClearIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </div>            
              <ListItem>
                <ListItemAvatar>
                  <Avatar> </Avatar>
                </ListItemAvatar>
                <TextField id="Standard-basic" placeholder="Person or email to share with" name="searchValue"
                  value={this.state.searchValue} onChange={this.handleChange} fullWidth />
                <IconButton > <DoneIcon /> </IconButton>
              </ListItem>  
                </List>
                <Menu anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleSearchListClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left bottom ' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left bottom' }}
                        PaperProps={{style: {maxHeight: ITEM_HEIGHT * 4.5, } }}
                    > 
                    {this.state.userList.map((item, index) => (
                            <MenuItem key={item.userId}  onClick={() => this.addCollborator(item)}>
                                {item.firstName}-{item.email}
                            </MenuItem>))}
                            
                        
                    </Menu>
                <div className="collabsave">
                <DialogActions>
                    <Button color="primary" >Save </Button>
                </DialogActions>
            </div>
        </Dialog>
    </div>
    <Snackbar
      anchorOrigin={{vertical:'bottom',horizontal:'center'}}
      open={this.state.snackbaropen}
      autoHideDuration={20000}
      onClose={this.snackbarClose}
      message={<span id="message-id">{this.state.snackbarmsg}</span>}/>
</div> 
            
            
           
            
        )
    }

}
export default Collaborator