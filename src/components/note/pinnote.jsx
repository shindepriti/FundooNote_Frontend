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
          isPined: this.props.isPined
        };
      }

      onSubmitPinned=()=>{
          this.setState({isPined:!this.state.isPined})
      }

      pinUnpinNotes = () => {
        
        let pinData = {
            noteIdList: [this.props.value.id],
            isPined: !this.state.isPined
        }
        console.log(pinData);
        let token =localStorage.getItem('token');
        service.pinUnpinNote(token,pinData)
            .then(res => {
                this.setState({isPined:!this.state.isPined});
                this.props.getNote()
            })
            .catch(err => {
                console.log(err);

            })  
        }

      render(){
          return(
              <div>
                 
                  <div>
                        <Tooltip title="Pin note">
                            <IconButton onClick={this.pinUnpinNotes}>
                                <img src={pin} alt="pin"></img>
                            </IconButton>
                        </Tooltip>
                  </div> 

                    
              </div>
          )
      }

}
export default Pinnote