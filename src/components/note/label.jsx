import React from 'react'
import {Dialog,Button, DialogTitle,Divider,DialogActions,IconButton,DialogContent,TextField} from '@material-ui/core';
import notes from '../../services/note'
import Close from '@material-ui/icons/Close'
import DoneIcon from "@material-ui/icons/Done";

const labelService = new notes()

class Label extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            open:false,
            label:"",
            
            
        };
      }
    handelMenuOpen=()=>{this.setState({open:true})};

    handleClose = () => { this.setState({ open: false })};
      
    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    noteLabel=()=>{
        let labelData = {
            userId: this.props.value.userId,
            isDelete:false,
            label:this.state.label
        }
        labelService.noteLabel(labelData)
            .then(res=>{

                this.props.getNoteLabel() 
                               
             })
            .catch(err => {
             console.log(err.response);
            });
    }

    addNoteLabel=()=>{
        let userId = localStorage.getItem('userId');
        let labelData = {
            userId: userId,
            isDeleted:false,
            label:this.state.newLabel
        }
        labelService.addNoteLabel(labelData)
            .then(res=>{
               this.getNoteLabel()
               this.setState({newLabel:""});
                               
             })
            .catch(err => {
               console.log(err.response);
            });
        }
  
        updateNoteLabel = (label)=>{
          console.log(this.state[label.id]);
          console.log(label);
  
          labelService.updateNoteLabel(label.id,this.state[label.id])
          .then(data => {
            console.log(data)
            this.getNoteLabel();
          })
          .catch(error => {
              console.log(error);
          })
        }
  
        deleteNoteLabel = (label)=>{
          console.log(this.state[label.id]);
          labelService.deleteNoteLabel(label.id)
          .then(data => {
            console.log(data)
            this.getNoteLabel();
          })
          .catch(error => {
              console.log(error);
          })
        }


      render(){
          return(
              <div>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <Button onClick={this.handelMenuOpen}>Edit</Button>
                </div>

                <div>
                    <Dialog  open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>Edit Labels</DialogTitle>
                        <DialogContent>
                            <div style={{display:"flex"}}>
                                <div>
                                    <IconButton><Close/></IconButton>
                                </div>
                                <div style={{display:"flex" ,float:"right"}} >
                                        <TextField disabledid="standard-disabled" placeholder="Create new label"
                                        name="label"onChange={this.handleChange} value={this.state.label}fullWidth  />
                                </div>
                                   <div>
                                       <IconButton onClick={this.noteLabel}><DoneIcon/></IconButton>
                                   </div>
                               
                            </div>


                        </DialogContent>
                        <div>
                            <DialogActions>
                                <Button  >Done </Button>
                            </DialogActions>
                        </div>
                    </Dialog>
                </div>
</div>
          )
      }

}
export default Label