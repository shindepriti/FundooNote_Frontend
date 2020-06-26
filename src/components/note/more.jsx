/**********************************************************************
 * @purpose  : Define Note delete label 
 * @file     : more.jsx             
 * @overview : Componet To Handel Delete label and Other options for User
 * @author   : priti shinde
 * @since    : 20/6/2020
************************************************************************/
import React from 'react'
import { Tooltip, Card,Grow,Popper,ClickAwayListener,MenuList, MenuItem,Menu} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import More from '../../assets/more.svg'
import DeleteNote from './deletenote'
class MoreNote extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
          anchorEl: null,
          active:false ,
          typeOfNote:this.props.typeOfNote        
        }
        
    }
    handleMenuClick = (event) => {
        this.setState({active:true,anchorEl: event.currentTarget});
        
    }
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };
    
    handleClickAway = () => {
      this.setState({ active: false});  
  }
      render(){
        const { anchorEl } = this.state;
          return(
              <div>
                  <ClickAwayListener onClickAway={this.handleClickAway} >
                <div>
                <div>
                <Tooltip title="More">
                        <IconButton getNote={this.props.getNote} onClick={this.handleMenuClick} >
                            <img src={More}></img>
                        </IconButton>
                  </Tooltip> 
                </div>
                <div  className="deletecontainer" >
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left bottom ' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left bottom' }}
                        open={Boolean(anchorEl)}
                        onClose={this.handleMenuClose}
                    > 
                        
                            <MenuItem>
                            <DeleteNote value={this.props.value} getNote={this.props.getNote}/>
                            </MenuItem>
                            <MenuItem >Add Lable</MenuItem>
                         
                        
                    </Menu>
                </div>
                </div>
                </ClickAwayListener> 
              </div>
          )
      }

}
export default MoreNote




  