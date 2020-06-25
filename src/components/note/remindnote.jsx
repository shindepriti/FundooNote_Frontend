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
import {IconButton,Tooltip, Card,Button,Menu,Chip,Paper,Typography} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import remind from '../../assets/notifications.svg'
import notes from '../../services/note'
import DateFnsUtils from '@date-io/date-fns';
const service = new notes()

class Reminder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteIdList:this.props.noteIdList,
            active: false,
            custom: false,
            anchorEl: null,
            selectedDate:new Date('2014-08-18T21:11:54'),
            timePick:false
        }      
    }
    

    handleMenuClick = (event) => {
        this.setState({active:true,anchorEl: event.currentTarget});
                
    }
    handelTimeClick = (event) => {
        this.setState({timePick:true});
    }

    handleClickAway = () => {
        this.setState({ active: false});  
    }


    addReminderNotes=()=>{
        let noteData = {
            noteIdList: [this.state.noteIdList],
            reminder: moment().format('MM/DD/YYYY, h:mm A')
        }
        let token =localStorage.getItem('token');
        service.reminderNote(token,noteData)
            .then(res=>{ 
                this.handleClickAway()
                
             })
            .catch(err => {
             console.log(err.response); 
            });
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
        let newDate = moment(date).format('MM/DD/YYYY, h:mm A');
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
                    onClose={this.handleMenuClose}
                > 
                {this.state.timePick ? 
                <div>
                    <MenuItem>
                    <TextField
                        onChange={this.datePicker}
                        id="datetime-local"
                        label="Select date"
                        type="datetime-local"
                        InputLabelProps={{
                        shrink: true,
                        }}/>
                        </MenuItem> 
                </div>:
                <div>
                    <Typography>Reminder:</Typography>
                    <MenuItem  onClick={this.addReminderNotes} >Later Today</MenuItem>
                    <MenuItem onClick={this.addReminderNotes} >Tommorow</MenuItem>
                    <MenuItem onClick={this.addReminderNotes} >Next Week</MenuItem>
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