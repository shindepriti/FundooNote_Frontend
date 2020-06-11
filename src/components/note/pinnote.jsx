import React from 'react'
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import pin from '../../assets/pin-outline.svg'
import unPin from '../../assets/pin.svg'

class Pinnote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isPinned: false
        };
      }

      onSubmitPinned=()=>{
          this.setState({isPinned:!this.state.isPinned})
      }

      render(){
          return(
              <div>
                  <Tooltip title={this.state.isPinned ? 'Unpin note': 'Pin note'}>
                        <IconButton onClick={this.onSubmitPinned}>
                            <img src={this.state.isPinned ? unPin : pin} alt="pin"></img>
                        </IconButton>
                  </Tooltip>

              </div>
          )
      }

}
export default Pinnote