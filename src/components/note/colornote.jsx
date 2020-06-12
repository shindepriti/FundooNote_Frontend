import React from 'react'
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ColorIcon from '../../assets/colour.svg'
class Colornote extends React.Component{
    constructor(){
        super()
        this.state={
            color: '#fff',
            
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ color : color.hex});
      };
    
      render(){
          return(
              <div>
                <Tooltip title="Change color">
                    <IconButton  onClick={this.handleChangeComplete}>
                    <img src={ColorIcon} alt="pin"></img>
                    </IconButton>
                </Tooltip>
                </div>
            )
        }
}
export default Colornote