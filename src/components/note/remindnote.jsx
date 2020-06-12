/***************************************************************
 * @purpose  : Define Note Reminder 
 * @file     : remindNote.jsx             
 * @overview : Componet To Handel Reminder Note For User
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { Typography ,IconButton,Tooltip} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import remind from '../../assets/notifications.svg'

 class Reminder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            custom: false,
            anchorEl: null,
        };
    }

    customDate = (event) => {
        var reminder = moment(event.target.value).format('DD MMM YYYY , h:mm a');
        // console.log('remnder', reminder)
        this.props.setReminder(reminder);
    }

    handleReminder = (event) => {
        this.setState({active: true,anchorEl:event.currentTarge});
    }

    handleClickAway = () => {
        this.setState({ active: false});  
    }

    handleCustom = (event) => {
        this.setState({custom: !this.state.custom,anchorEl: event.currentTarget});
    }
    setDate=()=>{
        console.log()
    }

    handleToday = () => {
        // var d = new Date();
        // var date = d.getDate();
        // var year = d.getFullYear();
        // var month = d.getMonth();

        // var s = moment(new Date(year, month, date, 8)).format('DD MMM YYYY , h:mm a');
        // this.setReminder(s);
        let today = moment().format('DD MMMM YYYY');
        console.log(today)
    }

    handleTomorrow = () => {
        var date = moment().add(1, 'days').format('MM/DD/YYYY, h:mm A');
        // var time = moment().format('LT'); 
        this.setDate(date);
    }

    render() {
        return (
            <div >
                <ClickAwayListener onClickAway={this.handleClickAway} >
                <div>
                <div>
                    <Tooltip title="Remind me">
                        <IconButton>
                            <img src={remind} alt="remind" onClick={this.handleReminder}/>
                        </IconButton>
                    </Tooltip>
                    </div>
                    <div>
                    <Popper anchorEl={this.state.anchorEl} open={this.state.active} transition disablePortal>
                        {({ TransitionProps}) => (
                            <Grow {...TransitionProps}>
                                <Paper>
                                  <MenuList>
                                        <Typography align='center'>Reminder:</Typography>
                                        <MenuItem onClick={this.handleToday} >Later Today</MenuItem>
                                        <MenuItem onClick={this.handleTomorrow} >Tommorow</MenuItem>
                                        <MenuItem onClick={this.handleCustom} >Custom</MenuItem>
                                        <Popper open={this.state.custom} anchorEl={this.state.anchorEl} transition disablePortalplacement={'right-end'}>
                                            {({ TransitionProps}) => (
                                                <Grow
                                                {...TransitionProps}
                                                    style={{ transformOrigin: 'center bottom' }}>
                                                    <Paper>
                                                        <MenuList>
                                                        <MenuItem>
                                                        <TextField
                                                            onChange={this.customDate}
                                                            id="datetime-local"
                                                            label="Select date"
                                                            type="datetime-local"
                                                            InputLabelProps={{
                                                            shrink: true,
                                                            }}/>
                                                        </MenuItem>
                                                        </MenuList>
                                                    </Paper>
                                                </Grow>)}
                                        </Popper>
                                        </MenuList>
                                        </Paper>

                                    </Grow>)}
                            </Popper>
                        </div>
                    </div>
                </ClickAwayListener>
            </div>
        );
    }
}

export default Reminder