import React from 'react'
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import pin from '../../assets/pin-outline.svg'
import unPin from '../../assets/pin.svg'
import notes from '../../services/note'
const service = new notes()

class Pinnote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isPined: false
        };
      }

      onSubmitPinned=()=>{
          this.setState({isPined:!this.state.isPined})
      }

      pinNote=()=>{
        const pinData={
            noteListId:[this.props.value],
            isPined:this.stats.isPined
        }
        let token = localStorage.getItem('token')
        service.pinUnpinNote(token,pinData).then((res)=>{
            console.log("notepined")
        })
        .catch(err => {
            console.log(err.response);
        });

      }

      render(){
          return(
              <div>
                  <Tooltip title={this.state.isPined ? 'Unpin note': 'Pin note'}>
                        <IconButton onClick={this.pinNote}>
                            <img src={this.state.isPined ? unPin : pin} alt="pin"></img>
                        </IconButton>
                  </Tooltip>

              </div>
          )
      }

}
export default Pinnote