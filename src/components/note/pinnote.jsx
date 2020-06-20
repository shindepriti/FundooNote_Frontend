import React from 'react'
import { Tooltip,Snackbar,Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import pin from '../../assets/pin-outline.svg'
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
                this.setState({snackbaropen:true ,  snackbarmsg: this.state.isPined=== true ? "Pinned":"Un Pinned"}) 
            })
            .catch(error => {
                this.setState({snackbaropen:true,snackbarmsg:error.message})

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
                  <Snackbar
                    anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                    open={this.state.snackbaropen}
                    autoHideDuration={100000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={<Button color="inherit" size="small">Undo</Button>}/>
                    
              </div>
          )
      }

}
export default Pinnote