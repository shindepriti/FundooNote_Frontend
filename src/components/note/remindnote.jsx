/***************************************************************
 * @purpose  : Define Note Reminder 
 * @file     : remindNote.jsx             
 * @overview : Componet To Handel Reminder Note For User
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import "../../scss/note.scss"
import { KeyboardTimePicker, KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers'; 
import {IconButton,Tooltip,Divider, Card,Button,Menu,Chip,Paper,Typography} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import remind from '../../assets/notifications.svg'
import notes from '../../services/note'
import DateFnsUtils from '@date-io/date-fns';
import { ArrowLeft, ArrowBack } from '@material-ui/icons';
const service = new notes()

class Reminder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteIdList:this.props.noteIdList,
            active: false,
            custom: false,
            anchorEl: null,
            timePick:false,
            list:[],
            open:false,
        }     
    }
    

    handleMenuClick = (event) => {
        this.setState({active:true,anchorEl: event.currentTarget});
                
    }
    handelTimeClick = (event) => {
        this.setState({timePick:true});
    }
    handelTimeClose = (event) => {
        this.setState({timePick:false});
    }
    handleClickAway = () => {
        this.setState({ active: false});  
    }
    
//   UNSAFE_componentDidUpdate(){
//     if(this.state. > 0)
//         this.addReminderNotes()
//   }
   
    addReminderNotes=()=>{
        if(this.state.reminder !== null && this.state.id !== ""){
        let noteData = {
            noteIdList: [this.state.noteIdList],
            reminder: moment().format('MM/DD/YYYY, LT')
        }
        let token =localStorage.getItem('token');
        service.reminderNote(token,noteData)
            .then(res=>{ 
                 this.props.getNote()
                 
                this.handleMenuClose()
             })
            .catch(err => {
             console.log(err.response); 
            });
    }
    // this.props.open()
    }
        handleCustom = (event) => {
        const { currentTarget } = event;
        this.setState({
            custom: !this.state.custom,
            anchorEl: currentTarget,
        });
    }

    datePicker = (event) => {
        let date = event.target.value
        let newDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
        this.props.setDate(newDate);
    }

   
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway} >
                <div>
                <div>
                    <Tooltip title="Remind me">
                        <IconButton>
                            <img src={remind} alt="remind" onClick={this.handleMenuClick}/>
                        </IconButton>
                    </Tooltip>
                </div>
                <div>
                
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left bottom ' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left bottom' }}
                    open={Boolean(anchorEl)}
                    className="remind-display"
                    onClose={this.handleMenuClose}
                > 
                {this.state.timePick ? 
                <div>
                    <ArrowBack onClick={this.handelTimeClose}/>
                    <MenuItem>
                    <TextField
                        onChange={this.datePicker}
                        id="datetime-local"
                        label="Select date"
                        type="datetime-local"
                        InputLabelProps={{shrink: true}}/>
                    </MenuItem> 
                    <div >
                    <Button  onClick={this.addReminderNotes} color="primary">Save </Button>
                    </div>
                    </div>:
                    <div>
                    <Typography>Reminder:</Typography>
                    <MenuItem onClick={this.addReminderNotes}>Latertoday</MenuItem> 
                    <MenuItem onClick={this.addReminderNotes} >Tommorow </MenuItem>
                    <MenuItem onclick={this.addReminderNotes} >Nextweek</MenuItem> 
                    <MenuItem onClick={this.handelTimeClick} >Pick date & Time</MenuItem>
                </div>
                 }
                </Menu>                          
                </div>
                
                </div>
                </ClickAwayListener>
            </div>
        );
    }
}

export default Reminder