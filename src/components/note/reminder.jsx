import React from 'react'
import { Tooltip,IconButton, Popper, Grow, ClickAwayListener, MenuList,Paper ,TextField} from '@material-ui/core';
import remind from '../../assets/notifications.svg'
import moment from 'moment'
import { MenuItem } from '@material-ui/core';
class Remindnote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            pickDate: false,
            reminderDate: null,
         
        };
      }

      handleClose=()=>{
          this.setState({open:!this.state.open , anchorE:null})
      }
      
      handleClick=(event)=>{
          this.setState({open:!this.state.open,anchorEl:event.currentTarget})
      }

      handleDate=(event)=>{
          var date = event.target.value
          var newDate = moment(date).format('MM/DD/YYYY ,h:mm' )
          this.props.setDate(newDate)
      }

      nextWeek = () => {debugger;
        var date = moment().add(7, 'days').calendar();
        var time = moment().format('LT');
        this.props.setDate(date + ", " + time);
    }

    tomorrow = () => {
        var date = moment().add(1, 'days').format('MM/DD/YYYY, h:mm A');
        // var time = moment().format('LT'); 
        this.props.setDate(date);
    }

    laterToday = () => {
        var date = moment().format('MM/DD/YYYY, 8:00')
        this.props.setDate(date + " PM");
    }

      render(){
          return(
              <div>
                <div>
                    <Tooltip title="Remind me">
                        <IconButton>
                            <img src={remind} alt="remind"/>
                        </IconButton>
                    </Tooltip>
                    </div>
                    <div>
                        <Popper open={this.state.open} anchorEl={this.state.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClick}>
                                            <MenuList>
                                                <div>Reminder:</div>
                                                <MenuItem onClick={this.laterToday}>Later today</MenuItem>
                                                <MenuItem onClick={this.tomorrow}>Tomorrow</MenuItem>
                                                <MenuItem onClick={this.nextWeek}>Next Week</MenuItem>
                                                <MenuItem>
                                                    <form noValidate>
                                                        <TextField
                                                            onChange={this.datePicker}
                                                            id="datetime-local"
                                                            label="Select date"
                                                            type="datetime-local"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </form>
                                                </MenuItem>
                                            </MenuList>   
                                        </ClickAwayListener>
                                        
                                    </Paper>

                                </Grow>
                        )}
                        </Popper>
                    </div>
                </div>
          )
      }

}
export default Remindnote