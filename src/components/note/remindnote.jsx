/***************************************************************
 * @purpose  : Define Note Reminder 
 * @file     : remindNote.jsx             
 * @overview : Componet To Handel Reminder Note For User
 * @author   : priti shinde
 * @since    : 3/6/2020
***************************************************************/
import React from 'react';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import "../../scss/note.scss"
import { Typography ,IconButton,Tooltip, Card,Button,Menu} from '@material-ui/core';
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

    handleReminder = (event) => {
        this.setState({active: true,anchorEl:event.currentTarge});
    }

    handleClickAway = () => {
        this.setState({ active: false});  
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

    nextWeek = () => {
        let date = moment().add(7, 'days').calendar();
        let time = moment().format('LT');
        this.props.setDate(date + ", " + time);
    }

    tomorrow = () => {
        let date = moment().add(1, 'days').format('MM/DD/YYYY, h:mm A');
        this.props.setDate(date);
    }

    laterToday = () => {
        let date = moment().format('MM/DD/YYYY, 8:00')
        this.props.setDate(date + " PM");
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
                    <Popper className="remind-card" anchorEl={this.state.anchorEl} open={this.state.active} transition >
                        {({ TransitionProps,placement}) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center bottom' }}
                            >
                           
                                <Card className="remind" variant="outlined" square >
                                  <MenuList>
                                        <Typography>Reminder:</Typography>
                                        <MenuItem onClick={this.laterToday} >Later Today</MenuItem>
                                        <MenuItem onClick={this.tomorrow} >Tommorow</MenuItem>
                                        <MenuItem onClick={this.nextWeek} >Next Week</MenuItem>
                                        <MenuItem onClick={this.handleCustom} >Pick date & Time</MenuItem>
                                        <Popper className="setdate" open={this.state.custom} anchorEl={this.state.anchorEl} transition>
                                            {({ TransitionProps}) => (
                                                <Grow
                                                {...TransitionProps}
                                                    style={{ transformOrigin: 'center bottom' }}>
                                                    <Card>
                                                        <MenuList>
                                                        <MenuItem>
                                                        <TextField
                                                            onChange={this.datePicker}
                                                            id="datetime-local"
                                                            label="Select date"
                                                            type="datetime-local"
                                                            InputLabelProps={{
                                                            shrink: true,
                                                            }}/>
                                                            <Button>Save</Button>
                                                        </MenuItem>
                                                        </MenuList>
                                                    </Card>
                                                </Grow>)}
                                        </Popper>
                                        </MenuList>
                                       
                                        </Card>

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