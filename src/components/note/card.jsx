/***************************************************************
 * @purpose  : Define Notes
 * @file     : Card.jsx             
 * @overview : Componet To Handel All Notes
 * @author   : priti shinde
 * @since    : 11/6/2020
***************************************************************/
import React, { Component } from 'react';
import {Card,Dialog,Chip,Avatar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import "../../scss/note.scss"
import '../../scss/updatestyle.scss'
import Pinnote from './pinnote'
import moment from 'moment';
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import Image from './addimage'
import More from './more'
import Collaborator from './collaborator'
import notes from '../../services/note'
import AccessTime from '@material-ui/icons/AccessTime'
import UpdateNote from './updatenote';

const service = new notes()
class Note extends Component{
    constructor(props){
        super(props)
        console.log(props);
        console.log(this.props);
        this.state ={
            title:this.props.value.title,
            description:this.props.value.description,
            id:this.props.value.id,
            collaborator:this.props.value.collaborator,
            isPined:this.props.value.isPined,           
            color:this.props.value.color,
            label:this.props.value.label,
            photo:this.props.value.photo,
            open:false,
            noteIdList:this.props.noteIdList,
            reminder: this.props.value.reminder,
            collabList:[]
            
        }
            
    }
    handleClickopen=()=>{
        this.setState({open:true})
    }

    handleClose = () => {
        var temp= true;
        temp && this.setState({ open: false });
        
      };
     
      
      handleDeleteReminder = () => {
        
        let noteData = {
            noteIdList: [this.props.value.id]
        }
        let token =localStorage.getItem('token');
        service.removeReminder(token,noteData)
            .then(res=>{
                this.handleClose()
                this.props.getNote() 
                               
             })
            .catch(err => {
             console.log(err.response);
            });
      };
   
    render(){
       
        return(
            <div>
            <div>
                <Card className="get-note" variant="outlined"> 
                     <div className="cardcontain" style={{backgroundColor : this.props.value.color}}>
                        <div className="container">
                            <div  onClick={this.handleClickopen} className="title">
                            <TextField
                            disabled
                            autoFocus
                            name='title'
                            multiline={true}
                            value = {this.props.value.title}
                            InputProps={{disableUnderline: true}} /></div>
                            <div className="pin">
                                <Pinnote  value={this.props.value} isPined={this.props.value.isPined} getNote={this.props.getNote}/>
                            </div>  
                        </div>
                        <div onClick={this.handleClickopen} className="input-note">
                        <TextField
                                disabled
                                id='descriptionDisplay'
                                placeholder='Take a note...'
                                multiline={true}
                                autoFocus
                                name='description'
                                value={this.props.value.description}
                                onChange={(event) => this.input(event)}
                                InputProps={{ disableUnderline: true}} />
                        </div>
                        {this.state.reminder && this.state.reminder.length > 0  ? 
                         <div>
                            <Chip
                                size="small"
                                noteIdList={this.props.value.id} 
                                handleClose={this.handleClose}
                                getNote={this.props.getNote}
                                avatar={<AccessTime alt="time"/>}
                                label={ moment().format('MM/DD/YYYY,LT')}
                                onDelete={()=> this.handleDeleteReminder(this.props.value.noteId)}
                            />
                        </div>:""}
                        
                        {/* {this.state.collaborator.length > 0 ? "":
                        <div>
                            <Avatar size="small" getNote={this.props.getNote}></Avatar>
                        </div>} */}
                        <div className="container">
                            <div className="note-icon">
                                <Remind  noteIdList={this.props.value.id} handleClose={this.handleClose}  value={this.props.value} getNote={this.props.getNote} />
                            </div>
                            <div className="note-icon">
                                <Collaborator open={this.state.open} value={this.props.value} handleClose={this.handleClose} getNote={this.props.getNote}/>
                            </div>
                            <div className="note-icon">
                                <Image/>
                            </div>
                            <div className="note-icon">
                                <Archive value={this.props.value} getNote={this.props.getNote}  />
                            </div> 
                            <div className="note-icon">
                                <Colornote  value={this.props.value} getNote={this.props.getNote}/>
                            </div>
                            <div className="note-icon"  >
                                <More value={this.props.value} getNoteLabel={this.props.getNoteLabel} getNote={this.props.getNote}/>
                            </div>
                        </div>

                     </div>
                  </Card>
              </div>
            <div>
            <Dialog 
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="max-width-dialog-title">
                <UpdateNote value={this.props.value} handleClose={this.handleClose} getNote={this.props.getNote}  />
            </Dialog>
    </div>
</div>
)}
}

export default Note