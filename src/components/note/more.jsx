import React from 'react'
import { Tooltip, Card,Grow,Popper,ClickAwayListener,MenuList, MenuItem} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import More from '../../assets/more.svg'



class MoreNote extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
          anchorEl: null,
          active:false,
        }
        
    }
    handleMenuClick = (event) => {
        this.setState({active:true,anchorEl: event.currentTarget});
        
      }
    
    handleClickAway = () => {
      this.setState({ active: false});  
  }
      render(){
          return(
              <div>
                  <ClickAwayListener onClickAway={this.handleClickAway} >
                <div>
                <div>
                <Tooltip title="More">
                        <IconButton onClick={this.handleMenuClick} >
                            <img src={More}></img>
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
                           <Card variant="outlined" square >
                                  <MenuList>
                                        <MenuItem >Delete Note</MenuItem>
                                        <MenuItem >Add Lable</MenuItem>
                                        
                                  </MenuList>
                                       
                                        </Card>

                                    </Grow>)}
                            </Popper>
                        </div>
                    </div>
                </ClickAwayListener>
                
              </div>
          )
      }

}
export default MoreNote




  