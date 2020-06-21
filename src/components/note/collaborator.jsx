import collaborator from '../../assets/collaborator.svg'
import React from 'react'
import { Tooltip,IconButton} from '@material-ui/core';

class Collaborator extends React.Component{

    render(){
        return(
            <div>
                <Tooltip title="collaborator">
                    <IconButton>
                        <img  src={collaborator} alt="colla"/>
                    </IconButton>
                </Tooltip>
            </div>
        )
    }

}
export default Collaborator