/***************************************************************
 * @purpose  : Define Note Add 
 * @file     : addnote.jsx             
 * @overview : Componet To Handel Note Add  
 * @author   : priti shinde
 * @since    : 9/6/2020
***************************************************************/
import React from 'react';
import Card from '@material-ui/core/Card';
import {Input,Button,InputBase,Snackbar,IconButton} from '@material-ui/core';
import "../../scss/note.scss"
import Pinnote from './pinnote'
import Colornote from './colornote'
import Archive from './archive'
import Remind from './remindnote'
import notes from '../../services/note'
import Image from './addimage'
import More from './more'
const service = new notes()

class Addnote extends React.Component{ 
    constructor(){
        super()
        this.state = {
            title:'',
            description:'',
            id:'',
            color:'',
            isPined:false,
            isArchived:false,
            noteType:'isNote',
            photo:'',
            reminder:'',
            openNote:false,
            isColorChanged: false,
            snackbaropen:false,
            snackbarmsg:"",
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    openNoteForContent=()=>{
        this.setState({openNote:true})
    }

    closeNoteForContent = ()=>{
        this.setState({openNote:false, title:'', description:''})
    }

    handleToggle = () => {
        this.setState(state => ({ openNote: !state.openNote }));
      };


    onSubmit(event){
        if(this.state.title !== '' && this.state.description !== ''){
            let token = localStorage.getItem('token')
            event.preventDefault()
            const note = {
                title:this.state.title,
                description:this.state.description,
                noteType: this.state.noteType,
                isPined:this.state.isPined,
                isArchived:this.state.isArchived,
                userId:token.id,
                color:this.state.color,
                photo:this.state.photo,
                reminder:this.state.reminder
            }
            service.addNote(note).then(res => {
                console.log(res)
                    this.props.getNote() 
                    this.setState({snackbaropen:true,snackbarmsg:"Note Added Successfully"}) 
                })
               .catch(err => {
                   console.log(err);  
               })
        }else{
            this.handleToggle();  
        } 
     }
    
    changeColor = (color) => {
        this.setState({
            color: color,
            isColorChanged: true
        })
    }


    setReminderDate = (date) => {
        this.setState({
            reminder: date
        })
    }
    onSubmitPinned=()=>{
        this.setState({isPined:!this.state.isPined})
    }

    render(){
            return(
                <div className="note">
                    <Card className="create-note" variant="outlined">
                    <div>
                        <div className="container">
                            <div className="input-title">
                                <InputBase name='title' value={this.state.title} className="input-text" placeholder="Title" onChange={this.onChange} multiline={true}
                                disableUnderline={true} onClick ={this.openNoteForContent}
                                ></InputBase>
                            </div>
                            <div className="pin">
                                <Pinnote value={this.state.isPined} onSubmitPinned={this.onSubmitPinned}/>
                            </div>  
                        </div>
                        { this.state.openNote ? true && <div>
                        <div className="input-note">
                            <Input value={this.state.description} name='description' className="input-text" placeholder="Take a note..." onChange={this.onChange}
                            multiline={true} disableUnderline={true} />
                        </div>
                        <div className="container" >
                            <div className="icon">
                                <Remind setDate={this.setReminderDate}/>
                            </div>
                            <div className="icon">
                                <Image/>
                            </div>
                            <div className="icon">
                                <Archive value={this.state.isArchived}/>
                            </div>
                            <div className="icon">
                                <Colornote  value={this.state.id} changeColor={this.changeColor}/>
                            </div>
                            <div className="icon">
                                <More/>
                            </div>
                            <div className="button-container">
                            <Button  size="small" onClick={this.onSubmit}>Close</Button>
                            </div>
                        </div>
                        </div> : null}
                        
                    </div>                    
                    </Card>

                    <Snackbar
                    anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                    open={this.state.snackbaropen}
                    autoHideDuration={2000}
                    onClose={this.snackbarClose}

                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[<IconButton key="close" arial-label="close" color="inherit" onClick={this.snackbarClose}>
                        x
                    </IconButton>]}/>
                </div>
            )

} 
}
export default Addnote