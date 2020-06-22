import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import "../../scss/note.scss"
import Pinnote from './pinnote'
import { MenuItem,Tooltip,IconButton,Menu,MenuList} from '@material-ui/core'
import DeleteNote from './deletenote'
import notes from '../../services/note'
import More from '../../assets/more.svg'
const service = new notes()

class TrashNote extends Component{
    constructor(props){
        super(props)
        this.state = {
            anchorEl: null,
        }
    }
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };
    handleMenuClick = (event) => {
        this.setState({active:true,anchorEl: event.currentTarget});
        
    }


    render(){
        const { anchorEl } = this.state;
        return(
            <div>
            <div>
                <Card className="get-note" variant="outlined"> 
                     <div style={{backgroundColor : this.props.value.color}}>
                        <div className="container">
                            <div className="title">
                            <h4>{this.props.value.title}</h4></div>
                            <div className="pin">
                                <Pinnote  value={this.props.value} isPined={this.props.value.isPined} getNote={this.props.getNote}/>
                            </div>  
                        </div>
                        <div className="input-note">
                        <TextField
                                disabled
                                id='descriptionDisplay'
                                placeholder='Take a note...'
                                multiline={true}
                                autoFocus
                                name='description'
                                value={this.props.value.description}
                                onChange={(event) => this.input(event)}
                                InputProps={{
                                    disableUnderline: true
                                }} />
                        </div>
                        <div className="container">
                        <div  className=" more-trash">
                        <div>
                        <div>
                            <Tooltip title="More">
                                <IconButton getNote={this.props.getNote} onClick={this.handleMenuClick} >
                                    <img src={More}></img>
                                 </IconButton>
                            </Tooltip> 
                        </div>
                        <div className="deletecontainer" >
                        <Menu 
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left bottom ' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left bottom' }}
                            open={Boolean(anchorEl)}
                            onClose={this.handleMenuClose}                                                       
                        > 
                        <MenuList className="deletecontainer">
                            <DeleteNote value={this.props.value} getNote={this.props.getNote}/>
                            <MenuItem >Delete Forever</MenuItem>
                        </MenuList> 
                        </Menu>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
        )
    }
}

export default TrashNote