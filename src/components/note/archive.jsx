import React from 'react'
import { Tooltip,IconButton } from '@material-ui/core';
import archive from '../../assets/archive.svg'
import unarchive from '../../assets/unarchive.svg'
import notes from '../../services/note'
const service = new notes()

class Archivenote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          archive: false
        };
      }

      handelArchive=()=>{
          this.setState({archive:!this.state.archive})
      }
      

      render(){
          return(
              <div>
                <Tooltip title={this.state.archive ? 'Unarchive' : 'Archive'}>
                    <IconButton onClick={this.props.archive}>
                        <img  src={this.state.archive ? unarchive : archive} alt="archive"/>
                    </IconButton>
                </Tooltip>
                </div>
          )
      }

}
export default Archivenote