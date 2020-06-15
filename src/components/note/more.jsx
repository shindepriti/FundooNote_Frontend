import React from 'react'
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import More from '../../assets/more.svg'

class MoreNote extends React.Component {
    
      render(){
          return(
              <div>
                  <Tooltip title="More">
                        <IconButton>
                            <img src={More}></img>
                        </IconButton>
                  </Tooltip>

              </div>
          )
      }

}
export default MoreNote