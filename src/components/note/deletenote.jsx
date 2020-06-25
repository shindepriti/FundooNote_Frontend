import React from 'react'
import {Button,Snackbar,MenuItem} from '@material-ui/core';
import notes from '../../services/note'
const service = new notes()

class Deletenote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: this.props.value.isDeleted,
            snackbaropen:false,
            snackbarmsg:"",
        };
      }

      
    trashUntrashNotes = () => {
        let noteData = {
            noteIdList: [this.props.value.id],
            isDeleted: !this.state.isDeleted
        }
        console.log(noteData);
        let token =localStorage.getItem('token');
        service.deleteNote(token,noteData)
            .then(response => {
                this.setState({isDeleted:!this.state.isDeleted});
                this.props.getNote()
                this.setState({snackbaropen:true ,  snackbarmsg: this.state.isDeleted === true?" Note Trashed":"Note UnTrashed"}) 
            })
            .catch(error => {
                this.setState({snackbaropen:true,snackbarmsg:error.message})
            }) 
            
        }

      render(){

          return(
                <div>
                    <div
                         onClick={this.trashUntrashNotes}>{this.state.isDeleted ? 'Restore' : 'Delete Note'}
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
export default Deletenote