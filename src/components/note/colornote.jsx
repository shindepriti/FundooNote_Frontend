import React from 'react'
import "../../scss/note.scss"
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ColorIcon from '../../assets/colour.svg'
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { CirclePicker } from 'react-color';
class Colornote extends React.Component{
    constructor(){
        super()
        this.state={
            open:false            
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ color : color.hex})
      };

       handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
      };
    
      render(){
        const { open } = this.state;
          return(
                    <div>
                    <Tooltip title="Change color" >
                        <IconButton>
                            <img aria-owns={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleToggle} alt="color" src={ColorIcon}></img>
                        </IconButton>
                    </Tooltip>
                    <Popper className="color-icon" open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                <CirclePicker
                                color={ this.state.background }
                                onChangeComplete={ this.handleChangeComplete }
                                />
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                        )}
                    </Popper>
                    
                </div>
                )
        }
}
export default Colornote