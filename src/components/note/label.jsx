import React from 'react'
import {Dialog,Button, DialogTitle,Divider,DialogActions,IconButton,DialogContent,TextField} from '@material-ui/core';
import notes from '../../services/note'
import Close from '@material-ui/icons/Close'
import DoneIcon from "@material-ui/icons/Done";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const labelService = new notes()

class Label extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            open:false,
            label:"",
            labelList:[]
            
            
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
                <div>
                    <Button onClick={this.handelMenuOpen}>Edit</Button>
                </div>

                <div>
                <Dialog  open={this.state.active} onClose={this.handleDialogClose}>
                        <DialogTitle>Edit Labels</DialogTitle>
                        <DialogContent>
                            <div style={{display:"flex"}}>
                                <div>
                                    <IconButton><Close/></IconButton>
                                </div>
                                <div>
                                        <TextField disabledid="standard-disabled" placeholder="Create new label"
                                        name="newLabel"  onChange={this.handleChange} value={this.state.newLabel} fullWidth  />
                                </div>
                                   <div>
                                       <IconButton onClick={this.addNoteLabel}><DoneIcon/></IconButton>
                                   </div>
                            </div>
                            {this.state.labelList.map((value,index)=>(
                              <div key={value.id}>
                                <div>
                                    <Label/>
                                </div>
                                <div>
                                    <TextField name={value.id} onChange={this.handleChange} defaultValue={value.label} fullWidth  />
                                </div>
                                  <div>
                                      <IconButton onClick={this.updateNoteLabel.bind(this,value)}><DoneIcon/></IconButton>
                                  </div>
                                  <div>
                                      <IconButton onClick={this.deleteNoteLabel.bind(this,value)}><DeleteForeverIcon color="secondary" /></IconButton>
                                  </div>
                            </div>
                            ))}

                          </DialogContent>
                        <div>
                          <DialogActions>
                              <Button onClick={this.handleDialogClose} >Done </Button>
                          </DialogActions>
                        </div>
                    </Dialog>
                </div>
</div>
          )
      }

}
export default Label