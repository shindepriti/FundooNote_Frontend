import React from 'react'
import { Tooltip,IconButton } from '@material-ui/core';
import remind from '../../assets/notifications.svg'

class Remindnote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }

      handelArchive=()=>{
          
      }

      render(){
          return(
              <div>
                <Tooltip title="Remind me">
                    <IconButton>
                        <img src={remind} alt="remind"/>
                    </IconButton>
                </Tooltip>
                </div>
          )
      }

}
export default Remindnote